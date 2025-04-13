"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_module_1 = require("./user/user.module");
const board_module_1 = require("./board/board.module");
const swimlane_module_1 = require("./swimlane/swimlane.module");
const card_module_1 = require("./card/card.module");
const typeorm_1 = require("@nestjs/typeorm");
const board_entity_1 = require("./board/entities/board.entity");
const swimlane_entity_1 = require("./swimlane/entities/swimlane.entity");
const card_entity_1 = require("./card/entities/card.entity");
const user_entity_1 = require("./user/entities/user.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [user_module_1.UserModule, board_module_1.BoardModule, swimlane_module_1.SwimlaneModule, card_module_1.CardModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '',
                database: 'kanban-app',
                entities: [board_entity_1.Board, swimlane_entity_1.Swimlane, card_entity_1.Card, user_entity_1.User],
                synchronize: process.env.ENV !== 'production'
            })
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map