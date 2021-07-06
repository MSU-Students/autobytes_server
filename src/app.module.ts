import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { ClearanceController } from './clearance/clearance.controller';
import { ClearanceService } from './clearance/clearance.service';

@Module({
  imports: [
    MongooseModule.forFeature([{name: User.name, schema: UserSchema }]),
    MongooseModule.forRoot('mongodb://localhost/autobytes')
  ],
  controllers: [AppController, UserController, ClearanceController],
  providers: [AppService, UserService, ClearanceService],
})
export class AppModule {}
