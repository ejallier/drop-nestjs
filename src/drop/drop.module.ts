import { Module } from '@nestjs/common';
import { DropService } from './drop.service';
import { DropController } from './drop.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Drop } from "src/drop/entities/drop.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Drop])],
  controllers: [DropController],
  providers: [DropService]
})
export class DropModule {
}
