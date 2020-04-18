import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMatinfosComponent } from './edit-matinfos.component';

describe('EditMatinfosComponent', () => {
  let component: EditMatinfosComponent;
  let fixture: ComponentFixture<EditMatinfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMatinfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMatinfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
