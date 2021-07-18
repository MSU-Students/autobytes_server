import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { RecordsService } from './records/records.service';
import { RecordsController } from './records/records.controller';
import { AttendanceService } from './attendance/attendance.service';
import { AttendanceController } from './attendance/attendance.controller';
import { ClearanceController } from './clearance/clearance.controller';
import { ClearanceService } from './clearance/clearance.service';
import { BulletinController } from './bulletin/bulletin.controller';
import { BulletinService } from './bulletin/bulletin.service';
import { Attendance, AttendanceSchema } from './schemas/attendance.schema';
import { Bulletin, BulletinSchema } from './schemas/bulletin.schema';
import { Clearance, ClearanceSchema } from './schemas/clearance.schema';
import { Records, RecordsSchema } from './schemas/records.schema';
import { ArchivedService } from './archived/archived.service';
import { ArchivedController } from './archived/archived.controller';
import { Archived, ArchivedSchema } from './schemas/archived.schema';
import { Media, MediaSchema } from './schemas/Media.schema';
import { MediaController } from './media/media.controller';
import { MediaService } from './media/media.service';
import { Students, StudentsSchema } from './schemas/students.schema';
import { StudentsController } from './students/students.controller';
import { StudentsService } from './students/students.service';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Attendance.name, schema: AttendanceSchema
    },
    {
      name: User.name, schema: UserSchema
    },
    {
      name: Bulletin.name, schema: BulletinSchema
    },
    {
      name: Clearance.name, schema: ClearanceSchema
    },
    {
      name: Records.name, schema: RecordsSchema
    },
    {
      name: Archived.name, schema: ArchivedSchema
    },
    {
      name: Media.name, schema: MediaSchema
    },
    {
      name: Students.name, schema: StudentsSchema
    }]),
    MongooseModule.forRoot('mongodb://localhost/autobytes', {
      useFindAndModify: false
    }),
  ],
  controllers: [AppController, UserController, AttendanceController, BulletinController, ClearanceController, RecordsController, ArchivedController, MediaController, StudentsController],
  providers: [AppService, UserService, AttendanceService, BulletinService, ClearanceService, RecordsService, ArchivedService, MediaService, StudentsService]
})
export class AppModule { }
