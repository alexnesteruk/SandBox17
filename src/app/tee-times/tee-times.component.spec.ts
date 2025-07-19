import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeeTimesComponent } from './tee-times.component';

describe('TeeTimesComponent', () => {
  let component: TeeTimesComponent;
  let fixture: ComponentFixture<TeeTimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeeTimesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeeTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
