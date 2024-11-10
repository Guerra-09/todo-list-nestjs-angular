import { Component } from '@angular/core';
import { TasksService, Task, Status } from './tasks.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})



export class TasksComponent {
  tasks: Task[] = [];
  public Status = Status;

  constructor(
    private taskService: TasksService,
  ) {}

  ngOnInit() {
    this.loadTasks()
  }

  loadTasks() {
    this.taskService.getAllTasks().subscribe((data: Task[]) => {
      this.tasks = data;
    })
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe({
      next: () => {
        console.log(`Tarea con id ${id} eliminada.`);
        this.loadTasks(); // Recarga la lista de tareas después de eliminar
      },
      error: (err) => {
        console.error('Error al eliminar la tarea:', err);
      }
    });
  }

  completedTask(id: number) {
    this.taskService.taskCheckedCompleted(id).subscribe({
      next: () => {
        console.log(`Tarea con id: ${id} marcada como completada`);
        this.loadTasks()
      }, 
      error: (err) => {
        console.error('Error al modificar la tarea:', err);
      }
    })
  }
  

}
