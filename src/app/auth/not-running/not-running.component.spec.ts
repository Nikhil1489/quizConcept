import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotRunningComponent } from './not-running.component';

describe('NotRunningComponent', () => {
  let component: NotRunningComponent;
  let fixture: ComponentFixture<NotRunningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotRunningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotRunningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
