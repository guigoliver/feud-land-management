import { PartialType } from '@nestjs/mapped-types';
import { CreateFeudDto } from './create-feud.dto';

export class UpdateFeudDto extends PartialType(CreateFeudDto) {}
