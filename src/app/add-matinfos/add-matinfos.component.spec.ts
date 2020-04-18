import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMatinfosComponent } from './add-matinfos.component';

describe('AddMatinfosComponent', () => {
  let component: AddMatinfosComponent;
  let fixture: ComponentFixture<AddMatinfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMatinfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMatinfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
