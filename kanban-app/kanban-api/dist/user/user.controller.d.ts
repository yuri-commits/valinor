import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PayloadRequest } from 'src/auth/auth/auth.guard';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<import("./entities/user.entity").User>;
    findOne(req: PayloadRequest): Promise<import("./entities/user.entity").User | null>;
    update(req: PayloadRequest, updateUserDto: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
    remove(req: PayloadRequest): Promise<import("typeorm").DeleteResult>;
}
