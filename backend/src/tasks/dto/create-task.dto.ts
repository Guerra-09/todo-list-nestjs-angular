import { IsBoolean, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator"
import { status } from "../entities/task.entity"

export class CreateTaskDto {

    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsOptional()
    description: string = ''

    @IsBoolean()
    @IsOptional()
    isImportant: boolean = false

}
