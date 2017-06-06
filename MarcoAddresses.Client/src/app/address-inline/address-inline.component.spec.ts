import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressInlineComponent } from './address-inline.component';

describe('AddressInlineComponent', () => {
  let component: AddressInlineComponent;
  let fixture: ComponentFixture<AddressInlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressInlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
