import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMentalProgramComponent } from './add-mental-program.component';

describe('AddMentalProgramComponent', () => {
  let component: AddMentalProgramComponent;
  let fixture: ComponentFixture<AddMentalProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMentalProgramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMentalProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
