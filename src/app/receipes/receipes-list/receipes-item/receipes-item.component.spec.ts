import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceipesItemComponent } from './receipes-item.component';

describe('ReceipesItemComponent', () => {
  let component: ReceipesItemComponent;
  let fixture: ComponentFixture<ReceipesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceipesItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceipesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
