import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpHttpComponent } from './exp-http.component';

describe('ExpHttpComponent', () => {
  let component: ExpHttpComponent;
  let fixture: ComponentFixture<ExpHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpHttpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
