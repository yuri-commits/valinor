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
exports.CardService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const card_entity_1 = require("./entities/card.entity");
const swimlane_service_1 = require("../swimlane/swimlane.service");
let CardService = class CardService {
    cardRepository;
    swimlaneService;
    constructor(cardRepository, swimlaneService) {
        this.cardRepository = cardRepository;
        this.swimlaneService = swimlaneService;
    }
    async create(createCardDto, userId) {
        const card = new card_entity_1.Card();
        card.name = createCardDto.name;
        card.content = createCardDto.content;
        card.order = createCardDto.order;
        card.swimlaneId = createCardDto.swimlaneId;
        const hasAccessToSwimlane = await this.swimlaneService.hasAccessToSwimlane(createCardDto.swimlaneId, userId);
        if (!hasAccessToSwimlane) {
            throw new common_1.UnauthorizedException('You are not part of this board');
        }
        return this.cardRepository.save(card);
    }
    update(id, userId, updateCardDto) {
        return this.cardRepository.update({
            id,
            swimlane: {
                board: { id: userId }
            }
        }, {
            name: updateCardDto.name,
            content: updateCardDto.content
        });
    }
    remove(id, userId) {
        return this.cardRepository.delete({
            id,
            swimlane: {
                board: {
                    users: { id: userId }
                }
            }
        });
    }
};
exports.CardService = CardService;
exports.CardService = CardService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(card_entity_1.Card)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        swimlane_service_1.SwimlaneService])
], CardService);
//# sourceMappingURL=card.service.js.map