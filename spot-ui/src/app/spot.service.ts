import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from './message';

@Injectable({
  providedIn: 'root'
})
export class SpotService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  url = "/api";

  constructor(
    private http: HttpClient) { }

    getMessage(): Observable<Message> {
      return this.http.get<Message>(this.url, this.httpOptions);
      // return new Observable(subscriber => {
      //   subscriber.next({
      //     message: "Hello world!"
      //   });
      // });
    }
}

