import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  FormArray,
  Validators,
} from '@angular/forms';
import { ConfigService } from 'src/services/config.service';
import { BokingService } from './boking.service';
import { Customvalidator } from '../rooms/rooms-booking/validators/customvalidator';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-boking',
  templateUrl: './boking.component.html',
  styleUrls: ['./boking.component.css'],
})
export class BokingComponent implements OnInit {
  bookingForm!: FormGroup;
  get guests() {
    return this.bookingForm.get('guest') as FormArray;
  }

  constructor(
    private configService: ConfigService,
    private fb: FormBuilder,
    private BookingService: BokingService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const roomId = this.route.snapshot.paramMap.get('roomid');
    this.bookingForm = this.fb.group(
      {
        roomId: new FormControl(
          { value: roomId },
          { validators: [Validators.required] },
        ),
        guestEmail: [
          '',
          {
            updateOn: 'blur',
            validators: [
              Validators.required,
              Validators.email,
              Customvalidator.validateName,
            ],
          },
        ],
        checkinDate: [''],
        checkoutTime: [''],
        bookingStatus: [''],
        bookingAmount: [''],
        bookingDate: [''],
        mobileNumber: [''],
        guestName: [''],
        address: this.fb.group({
          AddressLine1: [''],
          AddressLine2: [''],
          City: [''],
          State: [''],
          Country: [''],
          ZipCode: [''],
          List: [''],
        }),
        guest: this.fb.array([this.addGuestControl()]),
        tnc: new FormControl(false, { validators: Validators.requiredTrue }),
      },
      {
        updateOn: 'blur',
      },
    );
    this.getBookingData();

    this.bookingForm.valueChanges.subscribe((data) => {
      this.BookingService.bookRoom(data).subscribe((data) => {});
      console.log(data);
    });
  }

  addBooking() {
    console.log(this.bookingForm.getRawValue());
    // this.BookingService.bookRoom(this.bookingForm.getRawValue()).subscribe(
    //   (data) => {},
    // );
    this.bookingForm.reset({
      roomId: '2',
      guestEmail: '',
      checkinDate: '',
      checkoutTime: '',
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      guestName: '',
      address: {
        AddressLine1: '',
        AddressLine2: '',
        City: '',
        State: '',
        Country: '',
        ZipCode: '',
        List: '',
        guest: [],
        tnc: false,
      },
    });
  }
  addGuestControl() {
    return this.fb.group({ guestName: [''], age: new FormControl('') });
  }

  addGuest() {
    this.guests.push(this.addGuestControl());
  }

  getBookingData() {
    this.bookingForm.patchValue({
      guestEmail: 'test@email.dk',
      checkinDate: new Date('10-Feb-2024'),
      checkoutTime: '',
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      guestName: '',
      address: {
        AddressLine1: '',
        AddressLine2: '',
        City: '',
        State: '',
        Country: '',
        ZipCode: '',
        List: '',
        guest: [],
        tnc: false,
      },
    });
  }

  removeGuest(i: number) {
    this.guests.removeAt(i);
  }
  addPassport() {
    this.bookingForm.addControl('passport', new FormControl(''));
  }
  deletePassport() {
    if (this.bookingForm.get('passport')) {
      this.bookingForm.removeControl('passport');
    }
  }
}
