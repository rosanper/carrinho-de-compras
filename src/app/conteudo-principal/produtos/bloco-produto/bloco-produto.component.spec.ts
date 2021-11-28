import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocoProdutoComponent } from './bloco-produto.component';

describe('BlocoProdutoComponent', () => {
  let component: BlocoProdutoComponent;
  let fixture: ComponentFixture<BlocoProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlocoProdutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocoProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
