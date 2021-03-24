import { Controller, Get, Post, Body } from '@nestjs/common';
import { DropService} from './drop.service';
import { CreateDropDto } from "drop-shared";

@Controller('drop')
export class DropController {
  constructor(private readonly dropService: DropService) {}

  @Post()
  create(@Body() drop: CreateDropDto) {
    return this.dropService.create(drop);
  }

  @Get()
  findAll() {
    return this.dropService.findAll();
  }

  // @Post('many')
  // createMany(@Body() drops: Drop[]) {
  //   return this.dropService.createMany(drops);
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.dropService.findOne(+id);
  // }
  //
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() drop: IDrop) {
  //   return this.dropService.update(+id, drop);
  // }
  //
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.dropService.remove(+id);
  // }
}
