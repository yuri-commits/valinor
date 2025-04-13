import { CreateSwimlaneDto } from './dto/create-swimlane.dto';
import { UpdateSwimlaneDto } from './dto/update-swimlane.dto';
import { Repository } from 'typeorm';
import { Swimlane } from './entities/swimlane.entity';
export declare class SwimlaneService {
    private swimlaneRepository;
    constructor(swimlaneRepository: Repository<Swimlane>);
    create(createSwimlaneDto: CreateSwimlaneDto): Promise<Swimlane>;
    findAllByBoardId(boardId: number): Promise<Swimlane[]>;
    update(id: number, updateSwimlaneDto: UpdateSwimlaneDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
