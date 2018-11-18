import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SslComponent } from './ssl.component';

describe('SslComponent', () => {
  let component: SslComponent;
  let fixture: ComponentFixture<SslComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SslComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SslComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
