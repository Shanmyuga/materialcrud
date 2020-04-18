import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMatinfosComponent } from './show-matinfos.component';

describe('ShowMatinfosComponent', () => {
  let component: ShowMatinfosComponent;
  let fixture: ComponentFixture<ShowMatinfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMatinfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMatinfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
