import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShaowTableComponent } from './shaow-table.component';

describe('ShaowTableComponent', () => {
  let component: ShaowTableComponent;
  let fixture: ComponentFixture<ShaowTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShaowTableComponent]
    });
    fixture = TestBed.createComponent(ShaowTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
