import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService implements OnInit {
  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:7028/api/';
  }

  ngOnInit() {
    this.getService();
  }

  getService() {
    return this.apiUrl;
  }
}
