import { Injectable } from '@nestjs/common';
import { CreateNobleDto } from './dto/create-noble.dto';
import { UpdateNobleDto } from './dto/update-noble.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Noble } from './entities/noble.entity';

@Injectable()
export class NobleService {
  constructor(@InjectRepository(Noble) private nobleRepo: Repository<Noble>) {}

  create(createNobleDto: CreateNobleDto) {
    const noble = this.nobleRepo.create(createNobleDto);
    return this.nobleRepo.save(noble);
  }

  findAll() {
    return this.nobleRepo.find();
  }

  findOne(id: string) {
    return this.nobleRepo.findOne({ where: { id } });
  }

  update(id: string, updateNobleDto: UpdateNobleDto) {
    return this.nobleRepo.update({ id }, updateNobleDto);
  }

  remove(id: string) {
    return this.nobleRepo.delete({ id });
  }
}
