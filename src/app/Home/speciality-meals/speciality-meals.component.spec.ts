import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialityMealsComponent } from './speciality-meals.component';

describe('SpecialityMealsComponent', () => {
  let component: SpecialityMealsComponent;
  let fixture: ComponentFixture<SpecialityMealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpecialityMealsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecialityMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
