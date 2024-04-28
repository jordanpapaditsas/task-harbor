import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TaskNotesDto } from '../../dto/taskNotes/task-notes.dto';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TaskNotesViewModel } from '../../view-models/task-notes.viewmodel';
import { ButtonModule } from 'primeng/button';
import { Guid } from 'guid-typescript';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-task-notes-edit',
  standalone: true,
  imports: [InputTextModule, FormsModule, ButtonModule, CommonModule],
  templateUrl: './task-notes-edit.component.html',
  styleUrls: ['./task-notes-edit.component.css'],
})
export class TaskNotesEditComponent implements OnInit {
  taskNote!: TaskNotesDto;
  taskNotes!: TaskNotesDto[];

  _taskNoteId!: Guid;

  taskNotesViewModel: TaskNotesViewModel;

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

          this.taskNote.Id = result.Id;
          this.taskNote.Name = result.Name;
          this.taskNote.SerialNumber = result.SerialNumber;
        });
    }
  }

  constructor(
    private http: HttpClient,
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.taskNotesViewModel = new TaskNotesViewModel(
      this.http,
      this.apiService
    );

    this.taskNote = new TaskNotesDto();
    this.taskNotes = new Array<TaskNotesDto>();
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this._taskNoteId = Guid.parse(id);

        this.taskNotesViewModel
          .getTaskNoteById(this._taskNoteId)
          .subscribe((result: any) => {
            this.taskNote = result;
          });
      }
    });
  }

  addNewTask(e: any) {
    this.taskNotesViewModel
      .addNewTaskNote(this.taskNote)
      .subscribe((result: any) => {
        this.taskNote = result;

        this.router.navigate(['tasknotes-list']);
      });
  }
}
