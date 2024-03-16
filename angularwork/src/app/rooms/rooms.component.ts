import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  ViewChild,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input,
} from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import {
  pipe,
  Observable,
  Subject,
  Subscription,
  catchError,
  map,
  of,
} from 'rxjs';
import { HttpEventType } from '@angular/common/http';
import { ConfigService } from 'src/services/config.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
  // this changeDectection will only update the changes if anything got pushed inside this component/property
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsComponent implements OnInit, AfterViewInit, AfterViewChecked {
  hotelName = 'Hilton hotel';

  hideRooms = true;

  numberOfRooms = 10;

  // this is to obseve the data we are looking for this.stream.subscribe also shows. This is good for the push data
  stream = new Observable<string>((observer) => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete();
    observer.error('error');
  });
  roomscount$ = this.roomsService.getRooms$.pipe(map((rooms) => rooms.length));
  // roomService = new RoomsService();
  roomList: RoomList[] = [];
  constructor(
    private roomsService: RoomsService,
    private configService: ConfigService,
  ) {}

  selectedRoom!: RoomList;

  @Input() rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  title = 'Room List';

  @ViewChild(HeaderComponent) headerCoponent!: HeaderComponent;

  totalbytes = 0;

  subscription!: Subscription;

  error$ = new Subject<string>();

  // subscription to the error
  getError$ = this.error$.asObservable();

  rooms$ = this.roomsService.getRooms$.pipe(
    catchError((err) => {
      console.log(err);
      this.error$.next(err.message);
      return of([]);
    }),
  );
  priceFilter = new FormControl(0);

  ngOnInit(): void {
    this.roomsService.getPhotos().subscribe((event) => {
      switch (event.type) {
        case HttpEventType.Sent: {
          console.log('Request has been made!');
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log('Response Header success!');
          break;
        }
        case HttpEventType.DownloadProgress: {
          this.totalbytes += event.loaded;
          break;
        }
        case HttpEventType.Response: {
          console.log(event.body);
        }
      }
    });
    this.roomsService.getRooms().subscribe((rooms) => {
      this.roomList = rooms;
    });
    // subscribe can take 3 values, next - complete - error
    this.stream.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('complete'),
      error: (err) => console.log('error'),
    });
    this.stream.subscribe((data) => {
      console.log(data);
    });
    // this.subscription = this.roomsService.getRooms$.subscribe((rooms) => {
    //   this.roomList = rooms;
    // });
  }
  ngAfterViewInit(): void {
    this.headerCoponent.title = 'Rooms View';
  }

  ngAfterViewChecked(): void {}

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms List';
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      //roomNumber: '4',
      roomType: 'delux',
      amenities: 'air condintioner, free Wi-fi',
      price: 500,
      photos: '../',
      checkinTime: new Date('11-feb-2024'),
      checkoutTime: new Date('11-feb-2024'),
      rating: 4,
    };
    console.log('addroom');

    // this .push will modifty the roomList
    // this.roomList.push(room);
    // spread operator will
    this.roomList = [...this.roomList, room];

    // this should work but doesn't
    this.roomsService.getRooms$.subscribe((data) => {
      this.roomList = data;
    });

    // this.roomsService.addRoom(room).subscribe((Room: RoomList) => {
    //   this.roomList.push(Room); // Add the new room to the existing roomList array
    // });
  }
  editRoom() {
    const room: RoomList = {
      roomNumber: '3',
      roomType: 'delux',
      amenities: 'air condintioner, free Wi-fi',
      price: 500,
      photos: '../',
      checkinTime: new Date('11-feb-2024'),
      checkoutTime: new Date('11-feb-2024'),
      rating: 4,
    };
    this.roomsService.editRoom(room).subscribe((data) => {
      this.roomList = data;
    });
  }

  deleteRoom() {
    this.roomsService.delete('3').subscribe((data) => {
      this.roomList = data;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
