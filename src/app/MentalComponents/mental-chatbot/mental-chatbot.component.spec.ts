import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentalChatbotComponent } from './mental-chatbot.component';

describe('MentalChatbotComponent', () => {
  let component: MentalChatbotComponent;
  let fixture: ComponentFixture<MentalChatbotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentalChatbotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentalChatbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
