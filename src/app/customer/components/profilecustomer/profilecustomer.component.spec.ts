import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilecustomerComponent } from './profilecustomer.component';

describe('ProfilecustomerComponent', () => {
  let component: ProfilecustomerComponent;
  let fixture: ComponentFixture<ProfilecustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilecustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilecustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
