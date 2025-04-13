import { Request, Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { SwimlaneService } from './swimlane.service';
import { CreateSwimlaneDto } from './dto/create-swimlane.dto';
import { UpdateSwimlaneDto } from './dto/update-swimlane.dto';
import { AuthGuard, PayloadRequest } from 'src/auth/auth/auth.guard';

@Controller('swimlane')
export class SwimlaneController {
	constructor(private readonly swimlaneService: SwimlaneService) { }

	@Post()
	@UseGuards(AuthGuard)
	create(
		@Request() req: PayloadRequest,
		@Body() createSwimlaneDto: CreateSwimlaneDto) {
		return this.swimlaneService.create(createSwimlaneDto, req.user.id);
	}

	@Get('board/:boardId')
	@UseGuards(AuthGuard)
	findAll(
		@Request() req: PayloadRequest,
		@Param('boardId') boardId: string) {
		return this.swimlaneService.findAllByBoardId(Number(boardId), req.user.id);
	}

	@Patch(':id')
	@UseGuards(AuthGuard)
	update(
		@Request() req: PayloadRequest,
		@Param('id') id: string,
		@Body() updateSwimlaneDto: UpdateSwimlaneDto) {
		return this.swimlaneService.update(+id, req.user.id, updateSwimlaneDto);
	}

	@Delete(':id')
	@UseGuards(AuthGuard)
	remove(
		@Request() req: PayloadRequest,
		@Param('id') id: string) {
		return this.swimlaneService.remove(+id, req.user.id);
	}
}
