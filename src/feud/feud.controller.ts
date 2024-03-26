import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FeudService } from './feud.service';
import { CreateFeudDto } from './dto/create-feud.dto';
import { UpdateFeudDto } from './dto/update-feud.dto';

@Controller('feud')
export class FeudController {
  constructor(private readonly feudService: FeudService) {}

  @Post()
  create(@Body() createFeudDto: CreateFeudDto) {
    return this.feudService.create(createFeudDto);
  }

  @Get()
  findAll() {
    return this.feudService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.feudService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFeudDto: UpdateFeudDto) {
    return this.feudService.update(+id, updateFeudDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.feudService.remove(+id);
  }
}
