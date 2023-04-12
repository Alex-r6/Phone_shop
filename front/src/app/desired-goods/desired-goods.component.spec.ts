import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesiredGoodsComponent } from './desired-goods.component';

describe('DesiredGoodsComponent', () => {
  let component: DesiredGoodsComponent;
  let fixture: ComponentFixture<DesiredGoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesiredGoodsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesiredGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
