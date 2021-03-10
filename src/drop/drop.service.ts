import { Injectable } from '@nestjs/common';
import { CreateDropDto } from './dto/create-drop.dto';
import { UpdateDropDto } from './dto/update-drop.dto';

@Injectable()
export class DropService {
  create(createDropDto: CreateDropDto) {
    return 'This action adds a new drop';
  }

  findAll() {
    return `This action returns all drop`;
  }

  findOne(id: number) {
    return `This action returns a #${id} drop`;
  }

  update(id: number, updateDropDto: UpdateDropDto) {
    return `This action updates a #${id} drop`;
  }

  remove(id: number) {
    return `This action removes a #${id} drop`;
  }
}
