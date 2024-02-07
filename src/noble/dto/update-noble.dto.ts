import { PartialType } from '@nestjs/mapped-types';
import { CreateNobleDto } from './create-noble.dto';

export class UpdateNobleDto extends PartialType(CreateNobleDto) {}
