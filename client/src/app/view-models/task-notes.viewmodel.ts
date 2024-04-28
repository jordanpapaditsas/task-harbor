import { HttpClient } from '@angular/common/http';
import { TaskNotesDto } from '../dto/taskNotes/task-notes.dto';
import { Guid } from 'guid-typescript';

export class TaskNotesViewModel {
  url: string;

  constructor(private http: HttpClient) {
    this.url = 'https://localhost:7028/api/';
  }

  public getAllTaskNotes() {
    let serviceUrl = this.url + 'TaskNotes';

    let headers = {
      'Content-Type': 'application/json',
    };

    return this.http.get(serviceUrl + '/getAllTaskNotes/', {
      headers: headers,
    });
  }

  public getTaskNoteById(taskNoteId: Guid) {
    let serviceUrl = this.url + 'TaskNotes';

    let headers = {
      'Content-Type': 'application/json',
    };

    return this.http.get(serviceUrl + '/getTaskNoteById/' + taskNoteId, {
      headers: headers,
    });
  }

  public addNewTaskNote(taskNote: TaskNotesDto) {
    let serviceUrl = this.url + 'TaskNotes';

    let headers = {
      'Content-Type': 'application/json',
    };

    return this.http.post(serviceUrl + '/addNewTaskNote/', taskNote, {
      headers: headers,
    });
  }

  public updateTaskNote(taskNote: TaskNotesDto) {
    let serviceUrl = this.url + 'TaskNotes';

    let headers = {
      'Content-Type': 'application/json',
    };

    return this.http.post(serviceUrl + '/updateTaskNote/', taskNote, {
      headers: headers,
    });
  }

  public deleteTaskNoteWithId(taskNoteId: Guid) {
    let serviceUrl = this.url + 'TaskNotes';

    let headers = {
      'Content-Type': 'application/json',
    };

    return this.http.post(serviceUrl + '/deleteTaskNoteWithId/', taskNoteId, {
      headers: headers,
    });
  }
}
