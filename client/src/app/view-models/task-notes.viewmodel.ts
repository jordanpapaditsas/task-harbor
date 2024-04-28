import { HttpClient } from '@angular/common/http';
import { TaskNotesDto } from '../dto/taskNotes/task-notes.dto';
import { Guid } from 'guid-typescript';
import { ApiService } from '../services/api/api.service';

export class TaskNotesViewModel {
  constructor(private http: HttpClient, private apiService: ApiService) {}

  public getAllTaskNotes() {
    let serviceUrl = this.apiService.getService() + 'TaskNotes';

    let headers = {
      'Content-Type': 'application/json',
    };

    return this.http.get(serviceUrl + '/getAllTaskNotes/', {
      headers: headers,
    });
  }

  public getTaskNoteById(taskNoteId: Guid) {
    let serviceUrl = this.apiService.getService() + 'TaskNotes';

    let headers = {
      'Content-Type': 'application/json',
    };

    return this.http.get(serviceUrl + '/getTaskNoteById/' + taskNoteId, {
      headers: headers,
    });
  }

  public addNewTaskNote(taskNote: TaskNotesDto) {
    let serviceUrl = this.apiService.getService() + 'TaskNotes';

    let headers = {
      'Content-Type': 'application/json',
    };

    return this.http.post(serviceUrl + '/addNewTaskNote/', taskNote, {
      headers: headers,
    });
  }

  public updateTaskNote(taskNote: TaskNotesDto) {
    let serviceUrl = this.apiService.getService() + 'TaskNotes';

    let headers = {
      'Content-Type': 'application/json',
    };

    return this.http.put(serviceUrl + '/updateTaskNote/', taskNote, {
      headers: headers,
    });
  }

  public deleteTaskNoteWithId(taskNoteId: Guid) {
    let serviceUrl = this.apiService.getService() + 'TaskNotes';

    let headers = {
      'Content-Type': 'application/json',
    };

    return this.http.delete(serviceUrl + '/deleteTaskNoteWithId/' + taskNoteId, {
      headers: headers,
    });
  }
}
