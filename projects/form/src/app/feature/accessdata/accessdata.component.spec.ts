import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessdataComponent } from './accessdata.component';

describe('AccessdataComponent', () => {
  let component: AccessdataComponent;
  let fixture: ComponentFixture<AccessdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessdataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccessdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
