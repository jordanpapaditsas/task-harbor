import { Component, OnInit } from '@angular/core';
import { TaskNotesViewModel } from '../../view-models/task-notes.viewmodel';
import { TaskNotesDto } from '../../dto/taskNotes/task-notes.dto';
import { HttpClient } from '@angular/common/http';
import { AppInfoService } from '../../services/app-info/app-info.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { SideNavigationComponent } from '../../layout/side-navigation/side-navigation.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { TaskNotesEditComponent } from '../task-notes-edit/task-notes-edit.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-notes-list',
  standalone: true,
  imports: [
    FormsModule,
    CardModule,
    ButtonModule,
    NavbarComponent,
    SideNavigationComponent,
    FooterComponent,
    TableModule,
    ToolbarModule,
    TaskNotesEditComponent,
    CommonModule,
  ],
  templateUrl: './task-notes-list.component.html',
  styleUrls: ['./task-notes-list.component.css'],
})
export class TaskNotesListComponent implements OnInit {
  taskNotesViewModel!: TaskNotesViewModel;

  taskNotes!: TaskNotesDto[];
  taskNote!: TaskNotesDto;

  selectedTaskNote!: TaskNotesDto;

  isTaskEditOpen: boolean = false;

  constructor(
    private http: HttpClient,
    private appInfo: AppInfoService,
    private router: Router
  ) {
    this.taskNotesViewModel = new TaskNotesViewModel(this.http, this.appInfo);

    this.taskNote = new TaskNotesDto();
  }

  ngOnInit() {
    this.getAllTaskNotesData();
  }

  getAllTaskNotesData() {
    if (this.appInfo.options) {
      this.taskNotesViewModel.getAllTaskNotes().subscribe((result: any) => {
        this.taskNotes = result;

        console.log(this.taskNotes);
      });
    }
  }

  onRowSelect(e: any) {
    if (e.data.Id) {
      this.taskNote.Id = e.data.Id;
      this.isTaskEditOpen = true;
      this.router.navigate(['tasknotes-edit', this.taskNote.Id]);
    }
  }

  onRowUnselect(e: any) {}

  addNewTask(e: any) {
    this.router.navigate(['tasknotes-edit']);
  }
}
