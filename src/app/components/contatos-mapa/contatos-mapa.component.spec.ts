import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatosMapaComponent } from './contatos-mapa.component';

describe('ContatosMapaComponent', () => {
  let component: ContatosMapaComponent;
  let fixture: ComponentFixture<ContatosMapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContatosMapaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatosMapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
