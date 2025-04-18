import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

	constructor(
		@InjectRepository(User)
		private userRepository: Repository<User>,
		private jwtService: JwtService
	) { }
	async login(loginDto: LoginDto) {
		const user = await this.userRepository.findOne({
			where: { email: loginDto.email }
		})
		if (!User) {
			throw new NotFoundException('User not found...');
		}
		if (!bcrypt.compareSync(loginDto.password, user!.password!)) {
			throw new UnauthorizedException('Invalid login details...');
		}

		const payload = { email: user?.email, id: user?.id }

		return {
			accessToken: await this.jwtService.signAsync(payload)
		}
	}
}
