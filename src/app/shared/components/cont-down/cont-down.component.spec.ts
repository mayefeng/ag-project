/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ContDownComponent } from './cont-down.component';

describe('ContDownComponent', () => {
  let component: ContDownComponent;
  let fixture: ComponentFixture<ContDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
