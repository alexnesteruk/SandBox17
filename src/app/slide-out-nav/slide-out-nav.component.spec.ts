import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideOutNavComponent } from './slide-out-nav.component';

describe('SlideOutNavComponent', () => {
  let component: SlideOutNavComponent;
  let fixture: ComponentFixture<SlideOutNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideOutNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SlideOutNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
