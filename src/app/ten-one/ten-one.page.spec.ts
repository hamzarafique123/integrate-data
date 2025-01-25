import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TenOnePage } from './ten-one.page';

describe('TenOnePage', () => {
  let component: TenOnePage;
  let fixture: ComponentFixture<TenOnePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TenOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
