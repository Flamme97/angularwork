import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { LoginGuard } from 'src/app/guards/login.guard';
import { BokingComponent } from './boking/boking.component';
import { CommentComponent } from './comment/comment.component';

const routes: Routes = [
  {
    path: 'employee',
    component: EmployeeComponent, //canActivate: //[LoginGuard]
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'rooms',
    loadChildren: () =>
      import('./rooms/rooms.module').then((m) => m.RoomsModule),
    canActivate: [LoginGuard],
    canLoad: [LoginGuard],
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, //canActivate: [LoginGuard] ,
  { path: 'bookings', component: BokingComponent },
  {
    path: 'commens',
    loadChildren: () =>
      import('./comment/comment.module').then((m) => m.CommentModule),
  },
  { path: '**', component: NotfoundComponent },
  { path: 'Comment', component: CommentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
