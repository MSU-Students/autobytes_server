import { ConfigService } from '@nestjs/config';
import { UserService } from './user.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { IUser } from '../interfaces/user.interface';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private configService: ConfigService,
        private jwtService: JwtService) { }

    async validateUser(username: string, pass: string): Promise<IUser> {
        const user = await this.userService.findByUsername(username);
        const passwordMatched = user && await bcrypt.compare(pass, user.password);
        if (passwordMatched && !user.disabled) {
            return user;
        }
        return null;
    }

    async login(user: any) {
        // use sub for userId to be consistent with JWT Standards
        const accessToken = this.getAccessToken(user);
        const refreshToken = this.jwtService.sign({ userId: user.id });
        let expiresIn = new Date();
        expiresIn.setSeconds(expiresIn.getSeconds()
            + parseInt(this.configService.get('jwt').expiresIn, 10))
        return {
            userId: user.id,
            accessToken,
            expiresIn,
            refreshToken
        };
    }

    getAccessToken(user: any) {
        const payload = { username: user.email, sub: user.id, role: user.userType || 'user' };
        return this.jwtService.sign(payload, {
            secret: this.configService.get('jwt').secret,
            expiresIn: this.configService.get('jwt').expiresIn
        });
    }

    async register(user: IUser): Promise<IUser> {
        const { userName } = user;
        const foundUser = await this.userService.findByUsername(userName);
        if (foundUser) {
            throw new HttpException(
                'User already exists',
                HttpStatus.BAD_REQUEST,
            );
        }
        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword;
        user.userName = user.userName.toLowerCase();
        return await this.userService.create(user);
    }

    async setCurrentRefreshToken(refreshToken: string, userId: string) {
        const currentHashedRefreshToken = await bcrypt.hash(refreshToken, 10);
        return await this.userService.setCurrentRefreshToken(currentHashedRefreshToken, userId);
    }

    async getUserIfRefreshTokenMatches(refreshToken: string, userId: string) {
        const user = await this.userService.findById(userId);
        if (refreshToken === user.refreshToken) {
            return user;
        }
    }

    async removeRefreshToken(userId: string) {
        return this.userService.setCurrentRefreshToken(null, userId);
    }

    pick(O: any, props: string[]): any {
        return props.reduce((o, k) => (o[k] = O[k], o), {})
    }
}
