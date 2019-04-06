import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Wishlist } from '@app/features/marasco/core/interfaces/Wishlist.interface';

@Component({
  selector: 'wp-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  //////////////////Input variables////////////////////
  @Input() wishlist: Wishlist;
  // private _wishlist: Wishlist;

  //   @Input() set wishlist(value: Wishlist) {

  //      this._wishlist = value;
  //      //this.doSomething(this._categoryId);

  //   }

  //   get wishlist(): Wishlist {

  //       return this._wishlist;

  //   }
  //////////////END Input variables////////////////////

  //////////////////Private variables//////////////////

  //////////////END Private variables//////////////////

  //////////////////Publicly exposed variables////////

  //////////////END Publicly exposed variables////////

  constructor() {}

  calculateTotal(wishlist: Wishlist): number {
    let total: number = 0;

    if (!wishlist.items)  {
      return 0;
    }
    
    wishlist.items.forEach((item) => {
      if (!!item.price) {
        total += item.price;
      }
    });

    return total;
  }

  calculateTotalPurchased(wishlist: Wishlist): number {
    let increment: number = 0;
    wishlist.items.forEach((item) => {
      if (!!item.purchased && item.purchased) {
        increment++;
      }
    });
    return increment;
  }

  init(wishlist: Wishlist) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {}

  ngOnDestroy() {}
}
