import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LandParcelService } from './land-parcel.service';
import { CreateLandParcelDto } from './dto/create-land-parcel.dto';
import { UpdateLandParcelDto } from './dto/update-land-parcel.dto';

@Controller('land-parcel')
export class LandParcelController {
  constructor(private readonly landParcelService: LandParcelService) {}

  @Post()
  create(@Body() createLandParcelDto: CreateLandParcelDto) {
    return this.landParcelService.create(createLandParcelDto);
  }

  @Get()
  findAll() {
    return this.landParcelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.landParcelService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLandParcelDto: UpdateLandParcelDto,
  ) {
    return this.landParcelService.update(+id, updateLandParcelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.landParcelService.remove(+id);
  }
}
