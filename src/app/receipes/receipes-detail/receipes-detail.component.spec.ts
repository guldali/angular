import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceipesDetailComponent } from './receipes-detail.component';

describe('ReceipesDetailComponent', () => {
  let component: ReceipesDetailComponent;
  let fixture: ComponentFixture<ReceipesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceipesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceipesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
