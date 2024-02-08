import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SerfService } from './serf.service';
import { CreateSerfDto } from './dto/create-serf.dto';
import { UpdateSerfDto } from './dto/update-serf.dto';

@Controller('serf')
export class SerfController {
  constructor(private readonly serfService: SerfService) {}

  @Post()
  create(@Body() createSerfDto: CreateSerfDto) {
    return this.serfService.create(createSerfDto);
  }

  @Get()
  findAll() {
    return this.serfService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serfService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSerfDto: UpdateSerfDto) {
    return this.serfService.update(id, updateSerfDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serfService.remove(id);
  }
}
