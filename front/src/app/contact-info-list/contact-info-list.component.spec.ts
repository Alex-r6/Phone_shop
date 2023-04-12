import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInfoListComponent } from './contact-info-list.component';

describe('ContactInfoListComponent', () => {
  let component: ContactInfoListComponent;
  let fixture: ComponentFixture<ContactInfoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactInfoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactInfoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
