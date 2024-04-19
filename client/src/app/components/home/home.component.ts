import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { SideNavigationComponent } from '../../layout/side-navigation/side-navigation.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth/auth.service';
import { AppInfoService } from '../../services/app-info/app-info.service';
import { Router } from '@angular/router';
import { UserDto } from '../../dto/users/user.dto';
import { UserViewModel } from '../../view-models/user.viewmodel';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { TableModule } from 'primeng/table';
import { TaskNotesViewModel } from '../../view-models/task-notes.viewmodel';
import { TaskNotesDto } from '../../dto/taskNotes/task-notes.dto';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    SideNavigationComponent,
    FooterComponent,
    InputTextModule,
    FormsModule,
    PasswordModule,
    TableModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  TaskNotesViewModel: TaskNotesViewModel;
  taskNote: TaskNotesDto;


  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private appInfo: AppInfoService,
    private router: Router
  ) {
    this.TaskNotesViewModel = new TaskNotesViewModel(this.http, this.appInfo);
    this.taskNote = new TaskNotesDto();
  }

  ngOnInit() {

  }

  addNewTask(e: any) {

    this.TaskNotesViewModel.addNewTaskNote(this.taskNote).subscribe((result: any) => {
      this.taskNote = result;
    });
  }
}