/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FundsSendComponent } from './funds-send.component';

describe('FundsSendComponent', () => {
  let component: FundsSendComponent;
  let fixture: ComponentFixture<FundsSendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundsSendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundsSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
