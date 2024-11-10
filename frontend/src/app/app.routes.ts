import { RouterModule, Routes } from '@angular/router';
import { CreateTaskComponent } from './tasks-crud/create-task/create-task.component';
import { UpdateTaskComponent } from './tasks-crud/update-task/update-task.component';
import { TasksComponent } from './tasks-crud/read-tasks/tasks.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [
    { path: 'create', component: CreateTaskComponent },
    { path: 'update/:id', component: UpdateTaskComponent },
    { path: 'all', component: TasksComponent },
    { path: '', redirectTo:'/all', pathMatch: 'full'},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}