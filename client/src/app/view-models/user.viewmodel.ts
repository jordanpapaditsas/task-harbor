import { HttpClient } from '@angular/common/http';
import { UserDto } from '../dto/users/user.dto';
import { Guid } from 'guid-typescript';
import { ApiService } from '../services/api/api.service';

export class UserViewModel {
  constructor(private http: HttpClient, private apiService: ApiService) {}

  public getAllUsers() {
    let serviceUrl = this.apiService.getService() + 'Users';

    let headers = {
      'Content-Type': 'application/json',
    };

    return this.http.get(serviceUrl + '/getAllUsers/', {
      headers: headers,
    });
  }

  public getUserById(userId: Guid) {
    let serviceUrl = this.apiService.getService() + 'Users';

    let headers = {
      'Content-Type': 'application/json',
    };

    return this.http.get(serviceUrl + '/getUserById/' + userId, {
      headers: headers,
    });
  }

  public addNewUser(userDto: UserDto) {
    let serviceUrl = this.apiService.getService() + 'Users';

    let headers = {
      'Content-Type': 'application/json',
    };

    return this.http.post(serviceUrl + '/addNewUser/', userDto, {
      headers: headers,
    });
  }

  public updateUser(userDto: UserDto) {
    let serviceUrl = this.apiService.getService() + 'Users';

    let headers = {
      'Content-Type': 'application/json',
    };

    return this.http.put(serviceUrl + '/updateUser/', userDto, {
      headers: headers,
    });
  }

  public deleteUser(userId: Guid) {
    let serviceUrl = this.apiService.getService() + 'Users';

    let headers = {
      'Content-Type': 'application/json',
    };

    return this.http.delete(serviceUrl + '/deleteUser/' + userId, {
      headers: headers,
    });
  }
}
