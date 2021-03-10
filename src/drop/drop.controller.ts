import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DropService } from './drop.service';
import { CreateDropDto } from './dto/create-drop.dto';
import { UpdateDropDto } from './dto/update-drop.dto';

@Controller('drop')
export class DropController {
  constructor(private readonly dropService: DropService) {}

  @Post()
  create(@Body() createDropDto: CreateDropDto) {
    return this.dropService.create(createDropDto);
  }

  @Get()
  findAll() {
    return this.dropService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dropService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDropDto: UpdateDropDto) {
    return this.dropService.update(+id, updateDropDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dropService.remove(+id);
  }
}
