import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BokingComponent } from './boking.component';

describe('BokingComponent', () => {
  let component: BokingComponent;
  let fixture: ComponentFixture<BokingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BokingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BokingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
