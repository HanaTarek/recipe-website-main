import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageFollowersFollowingComponent } from './manage-followers-following.component';

describe('ManageFollowersFollowingComponent', () => {
  let component: ManageFollowersFollowingComponent;
  let fixture: ComponentFixture<ManageFollowersFollowingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageFollowersFollowingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageFollowersFollowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
