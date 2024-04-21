import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TaskNotesDto } from '../../dto/taskNotes/task-notes.dto';
import { HttpClient } from '@angular/common/http';
import { AppInfoService } from '../../services/app-info/app-info.service';
import { Router } from '@angular/router';
import { TaskNotesViewModel } from '../../view-models/task-notes.viewmodel';
import { ButtonModule } from 'primeng/button';
import { Guid } from 'guid-typescript';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-notes-edit',
  standalone: true,
  imports: [InputTextModule, FormsModule, ButtonModule, CommonModule],
  templateUrl: './task-notes-edit.component.html',
  styleUrls: ['./task-notes-edit.component.css'],
})
export class TaskNotesEditComponent implements OnInit {
  taskNote!: TaskNotesDto;

  taskNotesViewModel: TaskNotesViewModel;

  _taskNoteId!: Guid;

  public get taskNoteId(): Guid {
    return this._taskNoteId;
  }

  @Input('taskNoteId')
  public set taskNoteId(value: Guid) {
    this._taskNoteId = value;

    if (this._taskNoteId) {
      this.taskNotesViewModel
        .getTaskNoteById(this._taskNoteId)
        .subscribe((result: any) => {
          this.taskNote = result as any;
        });
    }
  }

  constructor(
    private http: HttpClient,
    private appInfo: AppInfoService,
    private router: Router
  ) {
    this.taskNotesViewModel = new TaskNotesViewModel(this.http, this.appInfo);

    this.taskNote = new TaskNotesDto();
  }

  ngOnInit() {}

  addNewTask(e: any) {
    this.taskNotesViewModel
      .addNewTaskNote(this.taskNote)
      .subscribe((result: any) => {
        this.taskNote = result;

        this.router.navigate(['tasknotes-list']);
      });
  }
}
