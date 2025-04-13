import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { RegisterDto } from 'src/auth/dto/register.dto';

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(User)
		private userRepository: Repository<User>,
	) { }

	create(createUserDto: RegisterDto) {
		const user = new User();
		user.email = createUserDto.email;
		user.password = createUserDto.password;
		user.firstName = createUserDto.firstName;
		user.lastName = createUserDto.lastName;
		return this.userRepository.save(user);
	}

	findOne(id: number) {
		return this.userRepository.findOneBy({ id });
	}

	isConnectedToBoard(id: number, boardId: number) {
		return this.userRepository.findOneBy({
			id,
			boards: { id: boardId }
		});
	}

	update(id: number, updateUserDto: UpdateUserDto) {
		return this.userRepository.update(id, {
			firstName: updateUserDto.firstName,
			lastName: updateUserDto.lastName
		})
	}

	remove(userId: number) {
		return this.userRepository.delete(userId);
	}
}
