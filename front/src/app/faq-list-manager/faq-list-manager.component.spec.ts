import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqListManagerComponent } from './faq-list-manager.component';

describe('FaqListManagerComponent', () => {
  let component: FaqListManagerComponent;
  let fixture: ComponentFixture<FaqListManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqListManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqListManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
