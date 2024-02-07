import { Injectable } from '@nestjs/common';
import { CreateSerfDto } from './dto/create-serf.dto';
import { UpdateSerfDto } from './dto/update-serf.dto';

@Injectable()
export class SerfService {
  create(createSerfDto: CreateSerfDto) {
    return 'This action adds a new serf';
  }

  findAll() {
    return `This action returns all serf`;
  }

  findOne(id: number) {
    return `This action returns a #${id} serf`;
  }

  update(id: number, updateSerfDto: UpdateSerfDto) {
    return `This action updates a #${id} serf`;
  }

  remove(id: number) {
    return `This action removes a #${id} serf`;
  }
}
