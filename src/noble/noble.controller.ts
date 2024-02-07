import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NobleService } from './noble.service';
import { CreateNobleDto } from './dto/create-noble.dto';
import { UpdateNobleDto } from './dto/update-noble.dto';

@Controller('noble')
export class NobleController {
  constructor(private readonly nobleService: NobleService) {}

  @Post()
  create(@Body() createNobleDto: CreateNobleDto) {
    return this.nobleService.create(createNobleDto);
  }

  @Get()
  findAll() {
    return this.nobleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nobleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNobleDto: UpdateNobleDto) {
    return this.nobleService.update(+id, updateNobleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nobleService.remove(+id);
  }
}
