import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEpicComponent } from './view-epic.component';

describe('ViewEpicComponent', () => {
  let component: ViewEpicComponent;
  let fixture: ComponentFixture<ViewEpicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEpicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEpicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
