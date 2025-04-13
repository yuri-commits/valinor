import { SwimlaneService } from './swimlane.service';
import { CreateSwimlaneDto } from './dto/create-swimlane.dto';
import { UpdateSwimlaneDto } from './dto/update-swimlane.dto';
export declare class SwimlaneController {
    private readonly swimlaneService;
    constructor(swimlaneService: SwimlaneService);
    create(createSwimlaneDto: CreateSwimlaneDto): Promise<import("./entities/swimlane.entity").Swimlane>;
    findAll(boardId: string): Promise<import("./entities/swimlane.entity").Swimlane[]>;
    update(id: string, updateSwimlaneDto: UpdateSwimlaneDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
