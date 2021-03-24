import {  Injectable } from '@nestjs/common';
import {  Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Drop } from "src/drop/entities/drop.entity";
import { CreateDropDto } from "src/drop/dto/create-drop.dto";

export interface IDrop {
    id?: number;
    title: string;
    latitude: number;
    longitude: number;
    user:  number;
}

@Injectable()
export class DropService {

    constructor(
        @InjectRepository(Drop)
        private dropRepository: Repository<Drop>
    ) {}


    create(drop: CreateDropDto) {
        return this.dropRepository.save(drop)
    }
    findAll(): Promise<CreateDropDto[]> {
        return this.dropRepository.find(
            {select: ["id", "title", "latitude", "longitude", "user"]}
        );
    }
}
