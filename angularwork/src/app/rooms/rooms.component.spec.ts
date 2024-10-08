import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsComponent } from './rooms.component';
import { RoomsService } from './services/rooms.service';
import { ConfigService } from 'src/services/config.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { APP_SERVICE_CONFIG } from '../appConfig/appconfig.service';

describe('RoomsComponent', () => {
  let component: RoomsComponent;
  let fixture: ComponentFixture<RoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [
        RoomsService,
        ConfigService,
        {
          // injection token here.
          provide: APP_SERVICE_CONFIG,
          useValue: { apiEndpoint: 'httpp://localhost:3000' },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle', () => {
    component.hideRooms = false;
    component.toggle();
    expect(component.hideRooms).toBe(true);
  });
});
