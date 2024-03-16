import { Component, OnInit } from '@angular/core';
import { RoomList } from '../rooms';
import { RoomsService } from '../services/rooms.service';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.css'],
})
export class RoomsAddComponent implements OnInit {
  room: RoomList = {
    roomType: '',
    amenities: '',
    checkinTime: new Date(),
    checkoutTime: new Date(),
    photos: '',
    price: 0,
    rating: 0,
  };

  successMesssage: string = '';

  constructor(private roomsService: RoomsService) {}

  ngOnInit(): void {}

  AddRoom(roomsForm: NgForm) {
    this.roomsService.addRoom(this.room).subscribe((data) => {
      this.successMesssage = 'Room Added successfully';
      roomsForm.resetForm({
      roomType: '',
      amenities: '',
      checkinTime: new Date(),
      checkoutTime: new Date(),
      photos: '',
      price: 0,
      rating: 0,
      });
    });
  }
}
