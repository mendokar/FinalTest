import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomiciliosTestComponent } from './domicilios-test.component';

describe('DomiciliosTestComponent', () => {
  let component: DomiciliosTestComponent;
  let fixture: ComponentFixture<DomiciliosTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomiciliosTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomiciliosTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
