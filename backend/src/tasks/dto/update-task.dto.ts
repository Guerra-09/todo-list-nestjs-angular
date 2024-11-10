import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { IsBoolean, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { status } from '../entities/task.entity';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsOptional()
    description: string 

    @IsOptional()
    @IsBoolean()
    isImportant: boolean

    @IsEnum(status)
    @IsOptional()
    status: status

}
