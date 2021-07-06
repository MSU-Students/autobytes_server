import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { RecordsService } from './records/records.service';
import { RecordsController } from './records/records.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{name: User.name, schema: UserSchema }]),
    MongooseModule.forRoot('mongodb://localhost/autobytes')
  ],
  controllers: [AppController, UserController, RecordsController],
  providers: [AppService, UserService, RecordsService],
})
export class AppModule {}
