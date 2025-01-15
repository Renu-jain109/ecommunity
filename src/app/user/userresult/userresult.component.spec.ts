import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserresultComponent } from './userresult.component';

describe('UserresultComponent', () => {
  let component: UserresultComponent;
  let fixture: ComponentFixture<UserresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserresultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
