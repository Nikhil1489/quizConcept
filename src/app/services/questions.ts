import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class questionsService {

  constructor(private http: HttpClient) { }


  getQuestions(formdata) {
    const data = JSON.stringify(formdata);
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    const options = { headers };
    return this.http.post<any>('https://devserver.buzz/posts/get_questionsdata', formdata, options);
  }

}