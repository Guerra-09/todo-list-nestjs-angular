import { Component } from '@angular/core';
import { Task, TasksService } from '../read-tasks/tasks.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-task',
  standalone: true,
  imports: [],
  templateUrl: './update-task.component.html',
  styleUrl: './update-task.component.css'
})


export class UpdateTaskComponent {

  taskId: number = 0;
  taskName: string = '';
  taskDescription: string = '';
  taskIsImportant: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TasksService
  ){}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.taskService.getTaskById(id).subscribe({
      next: (task) => {
        // this.task = task

        this.taskId = task.id
        this.taskName = task.name
        this.taskDescription = task.description
        this.taskIsImportant = task.isImportant
      },
      error: (err) => console.error(`Error loading: ${err}`),
    })

  }

  getTask(id: number) {
    console.log(`Se deberia obtener task con id: ${id}`)

    return this.taskService.getTaskById(id).subscribe()
  }

  updateTask(id: number, name: string, description: string, isImportant: boolean) {
    
    this.router.navigate(["../all"])

    return this.taskService.updateFields(id, name, description, isImportant).subscribe()
    
  }

}
