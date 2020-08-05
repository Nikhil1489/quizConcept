import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Stage2DialogComponent } from './stage2-dialog.component';

describe('Stage2DialogComponent', () => {
  let component: Stage2DialogComponent;
  let fixture: ComponentFixture<Stage2DialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Stage2DialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Stage2DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
