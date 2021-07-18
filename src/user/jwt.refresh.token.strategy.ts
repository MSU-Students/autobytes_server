import { Request } from 'express';
import { AuthService } from './auth.service';
import { JwtConfig } from './../config/jwt.config.type';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtRefreshTokenStrategy extends PassportStrategy(Strategy, 'jwt-refresh-token') {
    constructor(private configService: ConfigService,
                private authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromBodyField("refresh_token"),
            ignoreExpiration: false,
            secretOrKey: configService.get<JwtConfig>('refresh').secret,
            passReqToCallback: true
        });
    }

    async validate(request: Request, payload: any) {
        const userId = payload.userId;
        const refreshToken = request.body.refresh_token;
        return this.authService.getUserIfRefreshTokenMatches(refreshToken, userId);
    }
}