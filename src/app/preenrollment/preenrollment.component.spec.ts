import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreenrollmentComponent } from './preenrollment.component';

describe('PreenrollmentComponent', () => {
  let component: PreenrollmentComponent;
  let fixture: ComponentFixture<PreenrollmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreenrollmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreenrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
