import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Stage3DialogComponent } from './stage3-dialog.component';

describe('Stage3DialogComponent', () => {
  let component: Stage3DialogComponent;
  let fixture: ComponentFixture<Stage3DialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Stage3DialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Stage3DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
