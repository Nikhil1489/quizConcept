import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class registerService {

  constructor(private http: HttpClient) { }


  register(formdata) {
    const data = JSON.stringify(formdata);
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    const options = { headers };
    return this.http.post<any>('https://devserver.buzz/users/register', formdata, options);
  }


}