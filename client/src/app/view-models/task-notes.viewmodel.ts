import { HttpClient } from '@angular/common/http';
import { AppInfoService } from '../services/app-info/app-info.service';
import { TaskNotesDto } from '../dto/taskNotes/task-notes.dto';
import { Guid } from 'guid-typescript';

export class TaskNotesViewModel {
  constructor(private http: HttpClient, private appInfo: AppInfoService) {}

  public getAllTaskNotes() {
    let headers = {
      'Content-Type': 'application/json',
    };

    let serviceUrl = this.appInfo.getService() + 'TaskNotes';

    return this.http.get(serviceUrl + '/getAllTaskNotes/', {
      headers: headers,
    });
  }

  public getTaskNoteById(taskNoteId: Guid) {
    let headers = {
      'Content-Type': 'application/json',
    };

    let serviceUrl = this.appInfo.getService() + 'TaskNotes';

    return this.http.get(serviceUrl + '/getTaskNoteById/' + taskNoteId, {
      headers: headers,
    });
  }

  public addNewTaskNote(taskNote: TaskNotesDto) {
    let headers = {
      'Content-Type': 'application/json',
    };

    let serviceUrl = this.appInfo.getService() + 'TaskNotes';

    return this.http.post(serviceUrl + '/addNewTaskNote/', taskNote, {
      headers: headers,
    });
  }

  public updateTaskNote(taskNote: TaskNotesDto) {
    let headers = {
      'Content-Type': 'application/json',
    };

    let serviceUrl = this.appInfo.getService() + 'TaskNotes';

    return this.http.post(serviceUrl + '/updateTaskNote/', taskNote, {
      headers: headers,
    });
  }

  public deleteTaskNoteWithId(taskNoteId: Guid) {
    let headers = {
      'Content-Type': 'application/json',
    };

    let serviceUrl = this.appInfo.getService() + 'TaskNotes';

    return this.http.post(serviceUrl + '/deleteTaskNoteWithId/', taskNoteId, {
      headers: headers,
    });
  }
}
