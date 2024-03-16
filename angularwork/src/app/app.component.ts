import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  QueryList,
  Inject,
  Optional,
} from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { HeaderComponent } from './header/header.component';
import { localStorageToken } from './localstorage.token';
import { InitService } from './init.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'learningangular';

  Role = 'User';
  // view Children will pull more instance
  @ViewChild('name', { static: true }) name!: ElementRef;

  constructor(
    @Inject(localStorageToken) private localStorage: Storage,
    private initService: InitService,
    private dialogRef: MatDialog,
    private router: Router,
  ) {
    console.log(initService.config);
  }
  // @ViewChildren(HeaderComponent)
  // headerChildrenComponent!: QueryList<HeaderComponent>;

  ngOnInit(): void {
    this.router.events.subscribe((event) => console.log('eventfromrouter'));
    this.name.nativeElement.innerText = 'Hiltn hotel';

    this.localStorage.setItem('name', 'hilton Hotel');
    console.log(this.localStorage);
  }
  // - ViewChild with only access the first element of this component
  //   @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  //   ngAfterViewInit(): void {
  //     const componentRef = this.vcr.createComponent(RoomsComponent);
  //     componentRef.instance.numberOfRooms = 50;
  //   }
  // }
}
