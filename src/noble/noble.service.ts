import { Injectable } from '@nestjs/common';
import { CreateNobleDto } from './dto/create-noble.dto';
import { UpdateNobleDto } from './dto/update-noble.dto';

@Injectable()
export class NobleService {
  create(createNobleDto: CreateNobleDto) {
    return 'This action adds a new noble';
  }

  findAll() {
    return `This action returns all noble`;
  }

  findOne(id: number) {
    return `This action returns a #${id} noble`;
  }

  update(id: number, updateNobleDto: UpdateNobleDto) {
    return `This action updates a #${id} noble`;
  }

  remove(id: number) {
    return `This action removes a #${id} noble`;
  }
}
