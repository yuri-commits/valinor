import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SwimlaneService } from './swimlane.service';
import { SwimlaneController } from './swimlane.controller';
import { Swimlane } from './entities/swimlane.entity';
import { UserModule } from 'src/user/user.module';

@Module({
  controllers: [SwimlaneController],
  providers: [SwimlaneService],
  imports: [TypeOrmModule.forFeature([Swimlane]), UserModule],
  exports: [SwimlaneService]
})
export class SwimlaneModule { }
