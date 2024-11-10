import { Component, Input } from '@angular/core';
import { Task, TasksService } from '../read-tasks/tasks.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})

export class CreateTaskComponent {
  newTask: Task[] = [];

  constructor(
    private taskService: TasksService,
    private router: Router
  ) {}

  createTask(
    name: string,
    description: string,
    isImportant: boolean,
  ) {
    this.taskService.createNewTask(name, description, isImportant).subscribe(
      response => {
        console.log('Tarea creada exitosamente:', response)
        this.router.navigate(["../all"])
      },
      error => {
        console.log('AAAA UN ERROR!:', error)
      }
    )
  }
}
