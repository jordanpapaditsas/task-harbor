import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { UserAccountComponent } from './pages/user-account/user-account.component';
import { TaskNotesListComponent } from './pages/task-notes-list/task-notes-list.component';
import { TaskNotesEditComponent } from './pages/task-notes-edit/task-notes-edit.component';
import { CalendarComponent } from './pages/calendar/calendar.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'create-account',
    component: CreateAccountComponent,
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'calendar',
    component: CalendarComponent,
  },
  {
    path: 'user-account',
    component: UserAccountComponent,
  },
  {
    path: 'tasknotes-list',
    component: TaskNotesListComponent,
  },
  {
    path: 'tasknotes-edit',
    component: TaskNotesEditComponent,
  },
];
