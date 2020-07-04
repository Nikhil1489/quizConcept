import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class answerService {

  constructor(private http: HttpClient) { }


  submitAnswer(formdata) {
    const data = JSON.stringify(formdata);
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    const options = { headers };
    return this.http.post<any>('https://devserver.buzz/posts', formdata, options);
  }


}