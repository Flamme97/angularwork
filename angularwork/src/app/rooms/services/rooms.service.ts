import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { APP_SERVICE_CONFIG } from 'src/app/appConfig/appconfig.service';
import { AppConfig } from 'src/app/appConfig/appconfig.interface';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  roomList: RoomList[] = [];

  // creating a new header and can pass it into the request we need from backend to check if it's working.
  // headers = new HttpHeaders({ token: '12345fgasda' });
  // headers = new HttpHeaders({ token: '12348das' });
  //property $ is to confirm it is a stream - Also passing in the header below with the request to get rooms with token
  //  this will be inserted after 'api/rooms',,{headers: this.headers,} 
  getRooms$ = this.http
    .get<RoomList[]>('/api/rooms')
    .pipe(shareReplay(1));

  constructor(
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient,
  ) {}

  // transform data to a array
  getRooms() {
    return this.http.get<RoomList[]>('/api/rooms');
    // return this.http.get<RoomList[]>('/api/rooms');
  }

  addRoom(room: RoomList) {
    return this.http.post<RoomList[]>('/api/rooms', room);
  }
  editRoom(room: RoomList) {
    return this.http.put<RoomList[]>(`/api/rooms/${room.roomNumber}`, room);
  }

  delete(id: string) {
    return this.http.delete<RoomList[]>(`/api/rooms/${id}`);
  }

  getPhotos() {
    const request = new HttpRequest(
      'GET',
      `https://jsonplaceholder.typicode.com/photos`,
      {
        reportProgress: true,
      },
    );
    return this.http.request(request);
  }
}
