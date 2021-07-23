"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var mongoose_1 = require("@nestjs/mongoose");
var user_schema_1 = require("./schemas/user.schema");
var user_controller_1 = require("./user/user.controller");
var user_service_1 = require("./user/user.service");
var records_service_1 = require("./records/records.service");
var records_controller_1 = require("./records/records.controller");
var attendance_service_1 = require("./attendance/attendance.service");
var attendance_controller_1 = require("./attendance/attendance.controller");
var clearance_controller_1 = require("./clearance/clearance.controller");
var clearance_service_1 = require("./clearance/clearance.service");
var bulletin_controller_1 = require("./bulletin/bulletin.controller");
var bulletin_service_1 = require("./bulletin/bulletin.service");
var attendance_schema_1 = require("./schemas/attendance.schema");
var bulletin_schema_1 = require("./schemas/bulletin.schema");
var clearance_schema_1 = require("./schemas/clearance.schema");
var records_schema_1 = require("./schemas/records.schema");
var archived_service_1 = require("./archived/archived.service");
var archived_controller_1 = require("./archived/archived.controller");
var archived_schema_1 = require("./schemas/archived.schema");
var Media_schema_1 = require("./schemas/Media.schema");
var media_controller_1 = require("./media/media.controller");
var media_service_1 = require("./media/media.service");
var students_schema_1 = require("./schemas/students.schema");
var students_controller_1 = require("./students/students.controller");
var students_service_1 = require("./students/students.service");
var auth_module_1 = require("./user/auth.module");
var config_1 = require("@nestjs/config");
var configuration_1 = require("./config/configuration");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        common_1.Module({
            imports: [
                config_1.ConfigModule.forRoot({
                    isGlobal: true,
                    load: [configuration_1["default"]],
                    envFilePath: ['.env.dev.local', '.env.dev', '.env.prod']
                }),
                mongoose_1.MongooseModule.forFeature([{
                        name: attendance_schema_1.Attendance.name, schema: attendance_schema_1.AttendanceSchema
                    },
                    {
                        name: bulletin_schema_1.Bulletin.name, schema: bulletin_schema_1.BulletinSchema
                    },
                    {
                        name: clearance_schema_1.Clearance.name, schema: clearance_schema_1.ClearanceSchema
                    },
                    {
                        name: records_schema_1.Records.name, schema: records_schema_1.RecordsSchema
                    },
                    {
                        name: archived_schema_1.Archived.name, schema: archived_schema_1.ArchivedSchema
                    },
                    {
                        name: Media_schema_1.Media.name, schema: Media_schema_1.MediaSchema
                    },
                    {
                        name: students_schema_1.Students.name, schema: students_schema_1.StudentsSchema
                    }, {
                        name: user_schema_1.User.name, schema: user_schema_1.UserSchema
                    }
                ]),
                mongoose_1.MongooseModule.forRoot('mongodb://localhost/autobytes', {
                    useFindAndModify: false
                }),
                auth_module_1.AuthModule
            ],
            controllers: [app_controller_1.AppController, attendance_controller_1.AttendanceController, bulletin_controller_1.BulletinController, clearance_controller_1.ClearanceController, records_controller_1.RecordsController, archived_controller_1.ArchivedController, media_controller_1.MediaController, students_controller_1.StudentsController, user_controller_1.UserController],
            providers: [app_service_1.AppService, attendance_service_1.AttendanceService, bulletin_service_1.BulletinService, clearance_service_1.ClearanceService, records_service_1.RecordsService, archived_service_1.ArchivedService, media_service_1.MediaService, students_service_1.StudentsService, user_service_1.UserService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
