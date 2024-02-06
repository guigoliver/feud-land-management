import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AcreService } from './acre.service';
import { CreateAcreDto } from './dto/create-acre.dto';
import { UpdateAcreDto } from './dto/update-acre.dto';

@Controller('acre')
export class AcreController {
  constructor(private readonly acreService: AcreService) {}

  @Post()
  create(@Body() createAcreDto: CreateAcreDto) {
    return this.acreService.create(createAcreDto);
  }

  @Get()
  findAll() {
    return this.acreService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.acreService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAcreDto: UpdateAcreDto) {
    return this.acreService.update(id, updateAcreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.acreService.remove(id);
  }
}
