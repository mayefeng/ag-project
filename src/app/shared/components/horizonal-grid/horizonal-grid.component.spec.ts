import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizonalGridComponent } from './horizonal-grid.component';

describe('HorizonalGridComponent', () => {
  let component: HorizonalGridComponent;
  let fixture: ComponentFixture<HorizonalGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizonalGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizonalGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
