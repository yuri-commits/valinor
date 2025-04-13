import { Request, Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CardService } from './card.service';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { AuthGuard, PayloadRequest } from 'src/auth/auth/auth.guard';

@Controller('card')
export class CardController {
	constructor(private readonly cardService: CardService) { }

	@Post()
	@UseGuards(AuthGuard)
	create(
		@Request() req: PayloadRequest,
		@Body() createCardDto: CreateCardDto) {
		return this.cardService.create(createCardDto, req.user.id);
	}

	@Patch(':id')
	@UseGuards(AuthGuard)
	update(
		@Request() req: PayloadRequest,
		@Param('id') id: string,
		@Body() updateCardDto: UpdateCardDto) {
		return this.cardService.update(+id, req.user.id, updateCardDto);
	}

	@Delete(':id')
	@UseGuards(AuthGuard)
	remove(
		@Request() req: PayloadRequest,
		@Param('id') id: string) {
		return this.cardService.remove(+id, req.user.id);
	}
}
