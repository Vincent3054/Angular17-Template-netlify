import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitmediaTextComponent } from './splitmedia-text.component';

describe('SplitmediaTextComponent', () => {
  let component: SplitmediaTextComponent;
  let fixture: ComponentFixture<SplitmediaTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SplitmediaTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SplitmediaTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
