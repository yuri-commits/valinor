import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { RegisterDto } from 'src/auth/dto/register.dto';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    create(createUserDto: RegisterDto): Promise<User>;
    findOne(id: number): Promise<User | null>;
    isConnectedToBoard(id: number, boardId: number): Promise<User | null>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
    remove(userId: number): Promise<import("typeorm").DeleteResult>;
}
