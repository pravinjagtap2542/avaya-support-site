import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterticketComponent } from './enterticket.component';

describe('EnterticketComponent', () => {
  let component: EnterticketComponent;
  let fixture: ComponentFixture<EnterticketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterticketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
