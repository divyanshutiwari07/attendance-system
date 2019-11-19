import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttendanceSystemComponent } from '../attendance-system/attendance-system.component';


const routes: Routes = [
  {
    path: '',
    component: AttendanceSystemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceSystemRoutingModule { }
