import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderListManagerComponent } from './order-list-manager.component';

describe('OrderListManagerComponent', () => {
  let component: OrderListManagerComponent;
  let fixture: ComponentFixture<OrderListManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderListManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderListManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
