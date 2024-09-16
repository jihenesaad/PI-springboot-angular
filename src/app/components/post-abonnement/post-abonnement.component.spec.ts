import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAbonnementComponent } from './post-abonnement.component';

describe('PostAbonnementComponent', () => {
  let component: PostAbonnementComponent;
  let fixture: ComponentFixture<PostAbonnementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostAbonnementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostAbonnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
