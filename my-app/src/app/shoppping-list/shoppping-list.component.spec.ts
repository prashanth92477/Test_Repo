import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopppingListComponent } from './shoppping-list.component';

describe('ShopppingListComponent', () => {
  let component: ShopppingListComponent;
  let fixture: ComponentFixture<ShopppingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopppingListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopppingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
