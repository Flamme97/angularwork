import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.css'],
})
export class RoomsBookingComponent implements OnInit {
  id: number = 0;

  id$ = this.router.paramMap.pipe(map((params) => params.get('roomid')));
  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    // never updates value without refreshing - Snapshot. 
    // this.id = this.router.snapshot.params['roomid']
    // // subscribe is not best practice for this
    // this.router.params.subscribe((params) => {
    //   this.id = params['roomid'];
    };
    // this.router.paramsMap.subscribe((params) => {
    //   params.get('roomid');
    // });
    // this.id$ = this.router.params.pipe(map(params => params['roomid']));
    // this.id = this.router.snapshot.params['roomid'];
    // this.router.params.subscribe((params) => {
    //   this.id = params['roomid'];
    // });
  }

