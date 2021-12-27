import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Collection4Component } from './collection4.component';

describe('Collection4Component', () => {
  let component: Collection4Component;
  let fixture: ComponentFixture<Collection4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Collection4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Collection4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
