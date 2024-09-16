import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentalProgramComponent } from './mental-program.component';

describe('MentalProgramComponent', () => {
  let component: MentalProgramComponent;
  let fixture: ComponentFixture<MentalProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentalProgramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentalProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
