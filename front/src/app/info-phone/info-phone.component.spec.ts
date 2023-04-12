import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPhoneComponent } from './info-phone.component';

describe('InfoPhoneComponent', () => {
  let component: InfoPhoneComponent;
  let fixture: ComponentFixture<InfoPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoPhoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
