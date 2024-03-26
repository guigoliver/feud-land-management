import { Injectable } from '@nestjs/common';
import { CreateFeudDto } from './dto/create-feud.dto';
import { UpdateFeudDto } from './dto/update-feud.dto';

@Injectable()
export class FeudService {
  create(createFeudDto: CreateFeudDto) {
    return 'This action adds a new feud';
  }

  findAll() {
    return `This action returns all feud`;
  }

  findOne(id: number) {
    return `This action returns a #${id} feud`;
  }

  update(id: number, updateFeudDto: UpdateFeudDto) {
    return `This action updates a #${id} feud`;
  }

  remove(id: number) {
    return `This action removes a #${id} feud`;
  }
}
