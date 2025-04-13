import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Repository } from 'typeorm';
import { Board } from './entities/board.entity';
export declare class BoardService {
    private boardRepository;
    constructor(boardRepository: Repository<Board>);
    create(createBoardDto: CreateBoardDto): Promise<Board>;
    findAllByUserId(userId: number): Promise<Board[]>;
    findOne(id: number): string;
    update(id: number, updateBoardDto: UpdateBoardDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
