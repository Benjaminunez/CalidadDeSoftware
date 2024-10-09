import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoRegistradoPage } from './no-registrado.page';

describe('NoRegistradoPage', () => {
  let component: NoRegistradoPage;
  let fixture: ComponentFixture<NoRegistradoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NoRegistradoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
