import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, switchMap, tap } from 'rxjs';

export enum Status {
  pending = 'pending',
  inProgress = 'in progress',
  done = 'done',
}

export interface Task {
  id: number;
  name: string;
  description: string;
  isImportant: boolean;
  status: Status;
}

@Injectable({
  providedIn: 'root'
})


export class TasksService {

  host = 'http://localhost:3000/api'

  constructor(private http: HttpClient) {}

  // Esta funcion retorna todas las tareas
  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.host}/tasks`).pipe(map((res) => res ));
  }

  // Funcion para enviar una nueva tarea
  createNewTask(
    name: string,
    description: string,
    isImportant: boolean,) {

      console.log(`Se va a crear la tarea de ${name}`)
      
      const task = { name, description, isImportant }
      
      return this.http.post<Task[]>(`${this.host}/tasks`, task)
  }

  // Funcion para eliminar una tarea
  deleteTask(id: number) {

    console.log(`Se eliminara la tarea con el id: ${id}`)

    return this.http.delete<Task[]>(`${this.host}/tasks/${id}`)
  }

  getTaskById(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.host}/tasks/${id}`)
  }

  updateFields(id: number, name?: string, description?: string, isImportant?: boolean) {

    return this.http.patch<Task>(`${this.host}/tasks/${id}`,
      {
        "name": name,
        "description": description,
        "isImportant": isImportant
      }
    )
    
  }

  taskCheckedCompleted(id: number): Observable<Task> {

    return this.http.get<Task>(`${this.host}/tasks/${id}`).pipe(
      tap(task => console.log('task fetched: ', task)),
      switchMap( task => 
        this.http.patch<Task>(`${this.host}/tasks/${id}`, {
            "description": task.description,
            "isImportant": task.isImportant,
            "status" :"done" 
          } )
      )
    )
  }
}
