import { Injectable } from '@nestjs/common';
import { CreateSerfDto } from './dto/create-serf.dto';
import { UpdateSerfDto } from './dto/update-serf.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Serf } from './entities/serf.entity';

@Injectable()
export class SerfService {
  constructor(@InjectRepository(Serf) private serfRepo: Repository<Serf>) {}
  create(createSerfDto: CreateSerfDto) {
    const serf = this.serfRepo.create(createSerfDto);
    return this.serfRepo.save(serf);
  }

  findAll() {
    return this.serfRepo.find();
  }

  findOne(id: string) {
    return this.serfRepo.findOne({ where: { id } });
  }

  update(id: string, updateSerfDto: UpdateSerfDto) {
    return this.serfRepo.update({ id }, updateSerfDto);
  }

  remove(id: string) {
    return this.serfRepo.delete({ id });
  }
}
