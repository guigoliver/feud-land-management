import { PartialType } from '@nestjs/mapped-types';
import { CreateAcreDto } from './create-acre.dto';

export class UpdateAcreDto extends PartialType(CreateAcreDto) {}
