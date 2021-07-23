import { ApiProperty } from "@nestjs/swagger";

export interface User {
    id?: number;
    firstName: string;
    middleName?: string;
    lastName: string;
    birthDate?: Date;
    userType: string;
    username?: string;
    password?: string;
    active?: boolean;
}
export class RegisterUserDto implements User {
    id?: number;
    @ApiProperty({ default: 'Ibrahim' })
    firstName: string;
    @ApiProperty({ default: 'S' })
    middleName?: string;
    @ApiProperty({ default: 'Lucman' })
    lastName: string;
    @ApiProperty({ type: 'string', format: 'date-time', example: '2000-06-30' })
    birthDate?: Date;
    @ApiProperty({ default: 'user' })
    username?: string;
    @ApiProperty({ type: 'string' })
    userType: string;
    password?: string;
    active?: boolean;
}

export class LoginUserDto implements User {
    id?: number;
    firstName: string;
    middleName?: string;
    lastName: string;
    userType: string;
    birthDate?: Date;
    @ApiProperty()
    username?: string;
    @ApiProperty()
    password?: string;
    active?: boolean;

}

export class RefreshDto {
    @ApiProperty({
        required: true,
        minLength: 5
    })
    refresh_token: string;
}
export class AccessTokenDto {
    @ApiProperty({
        required: false,
        minLength: 5
    })
    accessToken?: string;
    @ApiProperty({
        required: false,
        minLength: 5
    })
    refreshToken?: string;
}