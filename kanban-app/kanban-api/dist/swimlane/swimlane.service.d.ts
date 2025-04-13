import { CreateSwimlaneDto } from './dto/create-swimlane.dto';
import { UpdateSwimlaneDto } from './dto/update-swimlane.dto';
import { Repository } from 'typeorm';
import { Swimlane } from './entities/swimlane.entity';
import { UserService } from 'src/user/user.service';
export declare class SwimlaneService {
    private swimlaneRepository;
    private userService;
    constructor(swimlaneRepository: Repository<Swimlane>, userService: UserService);
    create(createSwimlaneDto: CreateSwimlaneDto, userId: number): Promise<Swimlane>;
    findAllByBoardId(boardId: number, userId: number): Promise<Swimlane[]>;
    hasAccessToSwimlane(swimlaneId: number, userId: number): Promise<boolean>;
    update(id: number, userId: number, updateSwimlaneDto: UpdateSwimlaneDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number, userId: number): Promise<import("typeorm").DeleteResult>;
}
