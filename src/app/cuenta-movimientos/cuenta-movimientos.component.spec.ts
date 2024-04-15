import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaMovimientosComponent } from './cuenta-movimientos.component';

describe('CuentaMovimientosComponent', () => {
  let component: CuentaMovimientosComponent;
  let fixture: ComponentFixture<CuentaMovimientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CuentaMovimientosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CuentaMovimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
