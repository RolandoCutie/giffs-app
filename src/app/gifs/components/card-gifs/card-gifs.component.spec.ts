/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardGifsComponent } from './card-gifs.component';

describe('CardGifsComponent', () => {
  let component: CardGifsComponent;
  let fixture: ComponentFixture<CardGifsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardGifsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
