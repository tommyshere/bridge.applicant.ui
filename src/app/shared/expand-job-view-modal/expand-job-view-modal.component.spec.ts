import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandJobViewModalComponent } from './expand-job-view-modal.component';

describe('ExpandJobViewModalComponent', () => {
  let component: ExpandJobViewModalComponent;
  let fixture: ComponentFixture<ExpandJobViewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandJobViewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandJobViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
