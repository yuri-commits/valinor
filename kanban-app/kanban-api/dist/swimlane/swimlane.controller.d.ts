import { SwimlaneService } from './swimlane.service';
import { CreateSwimlaneDto } from './dto/create-swimlane.dto';
import { UpdateSwimlaneDto } from './dto/update-swimlane.dto';
import { PayloadRequest } from 'src/auth/auth/auth.guard';
export declare class SwimlaneController {
    private readonly swimlaneService;
    constructor(swimlaneService: SwimlaneService);
    create(req: PayloadRequest, createSwimlaneDto: CreateSwimlaneDto): Promise<import("./entities/swimlane.entity").Swimlane>;
    findAll(req: PayloadRequest, boardId: string): Promise<import("./entities/swimlane.entity").Swimlane[]>;
    update(req: PayloadRequest, id: string, updateSwimlaneDto: UpdateSwimlaneDto): Promise<import("typeorm").UpdateResult>;
    remove(req: PayloadRequest, id: string): Promise<import("typeorm").DeleteResult>;
}
