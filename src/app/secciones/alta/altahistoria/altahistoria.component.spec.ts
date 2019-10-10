import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltahistoriaComponent } from './altahistoria.component';

describe('AltahistoriaComponent', () => {
  let component: AltahistoriaComponent;
  let fixture: ComponentFixture<AltahistoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltahistoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltahistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
