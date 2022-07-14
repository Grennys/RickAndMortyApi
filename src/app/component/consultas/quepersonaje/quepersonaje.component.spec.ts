import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuepersonajeComponent } from './quepersonaje.component';

describe('QuepersonajeComponent', () => {
  let component: QuepersonajeComponent;
  let fixture: ComponentFixture<QuepersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuepersonajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuepersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
