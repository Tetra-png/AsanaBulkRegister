import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskRegisterComponent } from './components/task-register/task-register.component';

const routes: Routes = [
  {
    path: "",
    component: TaskRegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
