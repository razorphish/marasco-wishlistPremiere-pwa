import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistListComponent } from './wishlist-list.component';

describe('WishlistComponent', () => {
  let component: WishlistListComponent;
  let fixture: ComponentFixture<WishlistListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WishlistListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
