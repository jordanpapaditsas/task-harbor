import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HttpClient } from '@angular/common/http';
import { UserViewModel } from './view-models/user.viewmodel';
import { UserDto } from './dto/users/user.dto';
import { Guid } from 'guid-typescript';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { UserAccountComponent } from './pages/user-account/user-account.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SideNavigationComponent } from './layout/side-navigation/side-navigation.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { TaskNotesListComponent } from './pages/task-notes-list/task-notes-list.component';
import { TaskNotesEditComponent } from './pages/task-notes-edit/task-notes-edit.component';
import { CalendarComponent } from './pages/calendar/calendar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    CommonModule,
    LoginComponent,
    ChangePasswordComponent,
    CreateAccountComponent,
    UserAccountComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SideNavigationComponent,
    TaskNotesListComponent,
    TaskNotesEditComponent,
    CalendarComponent,
  ],
})
export class AppComponent {
  constructor(private http: HttpClient) {}
}
