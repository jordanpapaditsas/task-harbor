import { HttpClient } from '@angular/common/http';
import { UserDto } from '../dto/users/user.dto';
import { Guid } from 'guid-typescript';
import { AppInfoService } from '../services/app-info/app-info.service';

export class UserViewModel {
  constructor(private http: HttpClient, private appInfo: AppInfoService) {}

  public getAllUsers() {
    let headers = {
      'Content-Type': 'application/json',
    };

    let serviceUrl = this.appInfo.getService() + 'Users';

    return this.http.get(serviceUrl + '/getAllUsers/', {
      headers: headers,
    });
  }

  public getUserById(userId: Guid) {
    let headers = {
      'Content-Type': 'application/json',
    };

    let serviceUrl = this.appInfo.getService() + 'Users';

    return this.http.get(serviceUrl + '/getUserById/' + userId, {
      headers: headers,
    });
  }

  public addNewUser(userDto: UserDto) {
    let headers = {
      'Content-Type': 'application/json',
    };

    let serviceUrl = this.appInfo.getService() + 'Users';

    return this.http.post(serviceUrl + '/addNewUser/', userDto, {
      headers: headers,
    });
  }

  public updateUser(userDto: UserDto) {
    let headers = {
      'Content-Type': 'application/json',
    };

    let serviceUrl = this.appInfo.getService() + 'Users';

    return this.http.put(serviceUrl + '/updateUser/', userDto, {
      headers: headers,
    });
  }

  public deleteUser(userId: Guid) {
    let headers = {
      'Content-Type': 'application/json',
    };

    let serviceUrl = this.appInfo.getService() + 'Users';

    return this.http.delete(serviceUrl + '/deleteUser/' + userId, {
      headers: headers,
    });
  }
}
