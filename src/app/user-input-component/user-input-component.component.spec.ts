import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInputComponentComponent } from './user-input-component.component';

describe('UserInputComponentComponent', () => {
  let component: UserInputComponentComponent;
  let fixture: ComponentFixture<UserInputComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserInputComponentComponent]
    });
    fixture = TestBed.createComponent(UserInputComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
