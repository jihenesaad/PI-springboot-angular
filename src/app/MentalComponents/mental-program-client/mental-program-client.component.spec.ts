import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentalProgramClientComponent } from './mental-program-client.component';

describe('MentalProgramClientComponent', () => {
  let component: MentalProgramClientComponent;
  let fixture: ComponentFixture<MentalProgramClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentalProgramClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentalProgramClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
