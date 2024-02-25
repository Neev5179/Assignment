import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadModuleComponent } from './load-module.component';

describe('LoadModuleComponent', () => {
  let component: LoadModuleComponent;
  let fixture: ComponentFixture<LoadModuleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadModuleComponent]
    });
    fixture = TestBed.createComponent(LoadModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
