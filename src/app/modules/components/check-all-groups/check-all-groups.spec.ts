import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckAllGroups } from './check-all-groups';

describe('CheckAllGroups', () => {
  let component: CheckAllGroups;
  let fixture: ComponentFixture<CheckAllGroups>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckAllGroups]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckAllGroups);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
