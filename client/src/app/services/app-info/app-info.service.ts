import { Injectable } from '@angular/core';
import { AppOptions } from '../../dto/app-options/app-options.dto';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppInfoService {
  options!: AppOptions;

  constructor(private http: HttpClient,) {
    this.load();
  }

  getService() {
    return this.options.AppService;
  }

  public getOptions(): Observable<any> {
    return this.http.get('../../assets/json/app_options.json');
  }

  load(): Promise<any> {
    return this.getOptions()
      .pipe(
        map((result: any) => {
          this.options = result;
          return result;
        })
      )
      .toPromise();
  }
}
