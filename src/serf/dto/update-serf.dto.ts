import { PartialType } from '@nestjs/mapped-types';
import { CreateSerfDto } from './create-serf.dto';

export class UpdateSerfDto extends PartialType(CreateSerfDto) {}
