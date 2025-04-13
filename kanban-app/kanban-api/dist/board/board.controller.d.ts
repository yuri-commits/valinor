import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { PayloadRequest } from 'src/auth/auth/auth.guard';
export declare class BoardController {
    private readonly boardService;
    constructor(boardService: BoardService);
    create(createBoardDto: CreateBoardDto, req: PayloadRequest): Promise<import("./entities/board.entity").Board>;
    findAll(req: PayloadRequest): Promise<import("./entities/board.entity").Board[]>;
    findOne(req: PayloadRequest, id: string): Promise<import("./entities/board.entity").Board | null>;
    update(req: PayloadRequest, id: string, updateBoardDto: UpdateBoardDto): Promise<import("typeorm").UpdateResult>;
    remove(req: PayloadRequest, id: string): Promise<import("typeorm").DeleteResult>;
}
