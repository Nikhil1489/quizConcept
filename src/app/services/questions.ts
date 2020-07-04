import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class questionsService {

  constructor(private http: HttpClient) { }

  getQuestions() {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    const options = { headers };
    return this.http.get<any>('https://devserver.buzz/posts', options);
  }

}