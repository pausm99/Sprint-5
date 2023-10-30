import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscenaComponent } from './escena.component';

describe('EscenaComponent', () => {
  let component: EscenaComponent;
  let fixture: ComponentFixture<EscenaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EscenaComponent]
    });
    fixture = TestBed.createComponent(EscenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
