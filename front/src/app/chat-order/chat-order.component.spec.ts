import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatOrderComponent } from './chat-order.component';

describe('ChatOrderComponent', () => {
  let component: ChatOrderComponent;
  let fixture: ComponentFixture<ChatOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
