import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAccountComponent } from './item-account.component';

describe('ItemAccountComponent', () => {
  let component: ItemAccountComponent;
  let fixture: ComponentFixture<ItemAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
