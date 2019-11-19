import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceSystemRoutingModule } from './attendance-system-routing.module';
import { AttendanceSystemComponent } from '../attendance-system/attendance-system.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AttendanceSystemComponent],
  imports: [
    CommonModule,
    AttendanceSystemRoutingModule,
    FormsModule
  ]
})
export class AttendanceSystemModule { }
