import { Component, OnInit } from '@angular/core';
import { TaskNotesViewModel } from '../../view-models/task-notes.viewmodel';
import { TaskNotesDto } from '../../dto/taskNotes/task-notes.dto';
import { HttpClient } from '@angular/common/http';
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
import { ApiService } from '../../services/api/api.service';

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
  taskNotes!: TaskNotesDto[];
  taskNote!: TaskNotesDto;
  selectedTaskNote!: TaskNotesDto;

  taskNotesViewModel: TaskNotesViewModel;

  constructor(
    private http: HttpClient,
    private apiService: ApiService,
    private router: Router
  ) {
    this.taskNotesViewModel = new TaskNotesViewModel(
      this.http,
      this.apiService
    );

    this.taskNote = new TaskNotesDto();
  }

  ngOnInit() {
    this.getAllTaskNotesData();
  }

  getAllTaskNotesData() {
    this.taskNotesViewModel.getAllTaskNotes().subscribe((result: any) => {
      this.taskNotes = result;
    });
  }

  onRowSelect(e: any) {
    if (e.data.Id) {
      const taskNoteId = e.data.Id;

      this.router.navigate(['tasknotes-edit', taskNoteId]);
    }
  }

  onRowUnselect(e: any) {}

  addNewTask(e: any) {
    this.router.navigate(['tasknotes-edit']);
  }

  updateTaskNote(taskNote: TaskNotesDto) {
    let taskNoteToUpdateId = taskNote.Id;

    this.router.navigate(['tasknotes-edit', taskNoteToUpdateId]);
  }

  deleteTaskNote(taskNote: TaskNotesDto) {
    let taskToDeleteId = taskNote.Id;

    if (taskToDeleteId) {
      this.taskNotesViewModel
        .deleteTaskNoteWithId(taskToDeleteId)
        .subscribe((result) => {
          setTimeout(() => {
            this.getAllTaskNotesData();
          }, 300);
        });
    }
  }
}
