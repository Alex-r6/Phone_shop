import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerCommentsComponent } from './manager-comments.component';

describe('ManagerCommentsComponent', () => {
  let component: ManagerCommentsComponent;
  let fixture: ComponentFixture<ManagerCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerCommentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
