import { CardService } from './card.service';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { PayloadRequest } from 'src/auth/auth/auth.guard';
export declare class CardController {
    private readonly cardService;
    constructor(cardService: CardService);
    create(req: PayloadRequest, createCardDto: CreateCardDto): Promise<import("./entities/card.entity").Card>;
    update(req: PayloadRequest, id: string, updateCardDto: UpdateCardDto): Promise<import("typeorm").UpdateResult>;
    remove(req: PayloadRequest, id: string): Promise<import("typeorm").DeleteResult>;
}
