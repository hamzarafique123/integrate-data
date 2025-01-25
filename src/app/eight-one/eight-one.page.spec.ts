import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EightOnePage } from './eight-one.page';

describe('EightOnePage', () => {
  let component: EightOnePage;
  let fixture: ComponentFixture<EightOnePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EightOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
