import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PartBExamPage } from './part-b-exam.page';

describe('PartBExamPage', () => {
  let component: PartBExamPage;
  let fixture: ComponentFixture<PartBExamPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PartBExamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
