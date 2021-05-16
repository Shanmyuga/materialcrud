import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelEpicComponent } from './del-epic.component';

describe('DelEpicComponent', () => {
  let component: DelEpicComponent;
  let fixture: ComponentFixture<DelEpicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelEpicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelEpicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
