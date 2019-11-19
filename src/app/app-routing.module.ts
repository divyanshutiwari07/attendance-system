import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'prefix' },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  // tslint:disable-next-line:max-line-length
  { path: 'attendance-system', loadChildren: () => import('./attendance-system/attendance-system.module').then(m => m.AttendanceSystemModule) },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
