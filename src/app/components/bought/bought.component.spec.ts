import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoughtComponent } from './bought.component';

describe('BoughtComponent', () => {
  let component: BoughtComponent;
  let fixture: ComponentFixture<BoughtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoughtComponent]
    });
    fixture = TestBed.createComponent(BoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
