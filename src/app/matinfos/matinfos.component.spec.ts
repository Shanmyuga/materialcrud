import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatInfosComponent } from './matinfos.component';

describe('MatInfosComponent', () => {
  let component: MatInfosComponent;
  let fixture: ComponentFixture<MatInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatInfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
