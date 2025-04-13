import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { Repository } from 'typeorm';
import { Card } from './entities/card.entity';
export declare class CardService {
    private cardRepository;
    constructor(cardRepository: Repository<Card>);
    create(createCardDto: CreateCardDto): Promise<Card>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCardDto: UpdateCardDto): string;
    remove(id: number): string;
}
