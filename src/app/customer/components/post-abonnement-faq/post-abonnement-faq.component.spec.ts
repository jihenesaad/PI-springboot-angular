import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAbonnementFaqComponent } from './post-abonnement-faq.component';

describe('PostAbonnementFaqComponent', () => {
  let component: PostAbonnementFaqComponent;
  let fixture: ComponentFixture<PostAbonnementFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostAbonnementFaqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostAbonnementFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
