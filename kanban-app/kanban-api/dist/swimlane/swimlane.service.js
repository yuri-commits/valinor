"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwimlaneService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const swimlane_entity_1 = require("./entities/swimlane.entity");
let SwimlaneService = class SwimlaneService {
    swimlaneRepository;
    constructor(swimlaneRepository) {
        this.swimlaneRepository = swimlaneRepository;
    }
    create(createSwimlaneDto) {
        const swimlane = new swimlane_entity_1.Swimlane();
        swimlane.name = createSwimlaneDto.name;
        swimlane.order = createSwimlaneDto.order;
        swimlane.boardId = createSwimlaneDto.boardId;
        return this.swimlaneRepository.save(swimlane);
    }
    findAllByBoardId(boardId) {
        return this.swimlaneRepository.find({
            where: { boardId }
        });
    }
    update(id, updateSwimlaneDto) {
        return this.swimlaneRepository.update(id, {
            name: updateSwimlaneDto.name,
            order: updateSwimlaneDto.order
        });
    }
    remove(id) {
        return this.swimlaneRepository.delete(id);
    }
};
exports.SwimlaneService = SwimlaneService;
exports.SwimlaneService = SwimlaneService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(swimlane_entity_1.Swimlane)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SwimlaneService);
//# sourceMappingURL=swimlane.service.js.map