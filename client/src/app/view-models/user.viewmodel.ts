import { HttpClient } from '@angular/common/http';
import { UserDto } from '../dto/users/user.dto';
import { Guid } from 'guid-typescript';

export class UserViewModel {
  serviceUrl: string;

  constructor(private http: HttpClient) {
    this.serviceUrl = 'https://localhost:7028/api/';
  }

  public getAllUsers() {
    let headers = {
      'Content-Type': 'application/json',
    };

    this.serviceUrl + 'Users';

    return this.http.get(this.serviceUrl + '/getAllUsers/', {
      headers: headers,
    });
  }

  public getUserById(userId: Guid) {
    let headers = {
      'Content-Type': 'application/json',
    };

    this.serviceUrl + 'Users';

    return this.http.get(this.serviceUrl + '/getUserById/' + userId, {
      headers: headers,
    });
  }

  public addNewUser(userDto: UserDto) {
    let headers = {
      'Content-Type': 'application/json',
    };

    this.serviceUrl + 'Users';

    return this.http.post(this.serviceUrl + '/addNewUser/', userDto, {
      headers: headers,
    });
  }

  public updateUser(userDto: UserDto) {
    let headers = {
      'Content-Type': 'application/json',
    };

    this.serviceUrl + 'Users';

    return this.http.put(this.serviceUrl + '/updateUser/', userDto, {
      headers: headers,
    });
  }

  public deleteUser(userId: Guid) {
    let headers = {
      'Content-Type': 'application/json',
    };

    this.serviceUrl + 'Users';

    return this.http.delete(this.serviceUrl + '/deleteUser/' + userId, {
      headers: headers,
    });
  }
}
