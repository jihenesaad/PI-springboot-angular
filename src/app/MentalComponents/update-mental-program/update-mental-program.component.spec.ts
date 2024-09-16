import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMentalProgramComponent } from './update-mental-program.component';

describe('UpdateMentalProgramComponent', () => {
  let component: UpdateMentalProgramComponent;
  let fixture: ComponentFixture<UpdateMentalProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMentalProgramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateMentalProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
