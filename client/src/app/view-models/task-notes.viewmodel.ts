import { HttpClient } from '@angular/common/http';
import { TaskNotesDto } from '../dto/taskNotes/task-notes.dto';
import { Guid } from 'guid-typescript';

export class TaskNotesViewModel {
  serviceUrl: string;

  constructor(private http: HttpClient) {
    this.serviceUrl = 'https://localhost:7028/api/';
  }

  public getAllTaskNotes() {
    let headers = {
      'Content-Type': 'application/json',
    };

    this.serviceUrl + 'TaskNotes';

    return this.http.get(this.serviceUrl + '/getAllTaskNotes/', {
      headers: headers,
    });
  }

  public getTaskNoteById(taskNoteId: Guid) {
    let headers = {
      'Content-Type': 'application/json',
    };

    this.serviceUrl + 'TaskNotes';

    return this.http.get(this.serviceUrl + '/getTaskNoteById/' + taskNoteId, {
      headers: headers,
    });
  }

  public addNewTaskNote(taskNote: TaskNotesDto) {
    let headers = {
      'Content-Type': 'application/json',
    };

    this.serviceUrl + 'TaskNotes';

    return this.http.post(this.serviceUrl + '/addNewTaskNote/', taskNote, {
      headers: headers,
    });
  }

  public updateTaskNote(taskNote: TaskNotesDto) {
    let headers = {
      'Content-Type': 'application/json',
    };

    this.serviceUrl + 'TaskNotes';

    return this.http.post(this.serviceUrl + '/updateTaskNote/', taskNote, {
      headers: headers,
    });
  }

  public deleteTaskNoteWithId(taskNoteId: Guid) {
    let headers = {
      'Content-Type': 'application/json',
    };

    this.serviceUrl + 'TaskNotes';

    return this.http.post(this.serviceUrl + '/deleteTaskNoteWithId/', taskNoteId, {
      headers: headers,
    });
  }
}
