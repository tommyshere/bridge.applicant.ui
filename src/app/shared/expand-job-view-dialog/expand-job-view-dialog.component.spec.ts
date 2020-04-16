import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandJobViewDialogComponent } from './expand-job-view-dialog.component';

describe('ExpandJobViewDialogComponent', () => {
  let component: ExpandJobViewDialogComponent;
  let fixture: ComponentFixture<ExpandJobViewDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandJobViewDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandJobViewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
