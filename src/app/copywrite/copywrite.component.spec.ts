import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopywriteComponent } from './copywrite.component';

describe('CopywriteComponent', () => {
  let component: CopywriteComponent;
  let fixture: ComponentFixture<CopywriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CopywriteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CopywriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
