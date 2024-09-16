import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrderedAbonnementsComponent } from './view-ordered-abonnements.component';

describe('ViewOrderedAbonnementsComponent', () => {
  let component: ViewOrderedAbonnementsComponent;
  let fixture: ComponentFixture<ViewOrderedAbonnementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOrderedAbonnementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewOrderedAbonnementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
