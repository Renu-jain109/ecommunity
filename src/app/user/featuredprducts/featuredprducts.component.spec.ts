import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedprductsComponent } from './featuredprducts.component';

describe('FeaturedprductsComponent', () => {
  let component: FeaturedprductsComponent;
  let fixture: ComponentFixture<FeaturedprductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedprductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedprductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
