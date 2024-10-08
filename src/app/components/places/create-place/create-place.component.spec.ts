import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePlaceComponent } from './create-place.component';

describe('CreatePlaceComponent', () => {
  let component: CreatePlaceComponent;
  let fixture: ComponentFixture<CreatePlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePlaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
