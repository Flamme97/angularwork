import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class BokingService {

  constructor(private http: HttpClient) { }

  bookRoom(boking: any) {
    return this.http.post('http://localhost:3000/boking/posts', boking)

  }
}
