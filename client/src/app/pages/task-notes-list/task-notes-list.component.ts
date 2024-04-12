import { Component, OnInit } from '@angular/core';
import { TaskNotesViewModel } from '../../view-models/task-notes.viewmodel';
import { TaskNotesDto } from '../../dto/taskNotes/task-notes.dto';
import { HttpClient } from '@angular/common/http';
import { AppInfoService } from '../../services/app-info/app-info.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-task-notes-list',
  standalone: true,
  imports: [FormsModule, CardModule, ButtonModule],
  templateUrl: './task-notes-list.component.html',
  styleUrls: ['./task-notes-list.component.css'],
})
export class TaskNotesListComponent implements OnInit {
  taskNotesViewModel!: TaskNotesViewModel;
  taskNote!: TaskNotesDto;

  constructor() {

  }

  ngOnInit() {

  }

  addNewTask(e: any) {
    this.taskNotesViewModel
      .addNewTaskNote(this.taskNote)
      .subscribe((result: any) => {
        this.taskNote = result;
      });
  }
}
