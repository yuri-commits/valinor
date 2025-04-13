import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { Repository } from 'typeorm';
import { Card } from './entities/card.entity';
import { SwimlaneService } from 'src/swimlane/swimlane.service';
export declare class CardService {
    private cardRepository;
    private swimlaneService;
    constructor(cardRepository: Repository<Card>, swimlaneService: SwimlaneService);
    create(createCardDto: CreateCardDto, userId: number): Promise<Card>;
    update(id: number, userId: number, updateCardDto: UpdateCardDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number, userId: number): Promise<import("typeorm").DeleteResult>;
}
