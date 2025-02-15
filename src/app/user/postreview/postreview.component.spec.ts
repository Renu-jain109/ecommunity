import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostreviewComponent } from './postreview.component';

describe('PostreviewComponent', () => {
  let component: PostreviewComponent;
  let fixture: ComponentFixture<PostreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
