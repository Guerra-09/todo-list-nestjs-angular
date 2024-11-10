import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {

  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  create(createTaskDto: CreateTaskDto) {
    const task = this.tasksRepository.create(createTaskDto);
    return this.tasksRepository.save(task)
  }

  findAll() {
    return this.tasksRepository.find()
  }

  findOne(id: number) {
    return this.tasksRepository.findOneBy({id});
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {

    const taskToUpdate: Task = await this.tasksRepository.findOneBy({id});

    if (!taskToUpdate) {
      throw new Error('Task not found')
    }

    return  this.tasksRepository.update(taskToUpdate, updateTaskDto);
  }

  async remove(id: number) {
    const taskToDelete: Task = await this.tasksRepository.findOneBy({id});

    if (!taskToDelete) {
      throw new Error('Task not found');
    }

    return this.tasksRepository.remove(taskToDelete);
  }
}
