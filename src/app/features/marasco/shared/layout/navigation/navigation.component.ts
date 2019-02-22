import {Component, OnInit} from '@angular/core';
import {LoginInfoComponent} from "../../user/login-info/login-info.component";

@Component({

  selector: 'sa-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {

  public user:any;

  public wishlists : any =  [
    {
      _id: '1234',
      name: 'wishlist 1',
      statusId: 'active'
    },
    {
      _id: '4444',
      name: 'wishlist 2',
      statusId: 'active'
    },
    {
      _id: '234234',
      name: 'wishlist 3',
      statusId: 'deleted'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

  isInRole(role) {
    let foundRole = false;

    for (let i = 0; i < this.user.roles.length; i++) {
      if (this.user.roles[i].normalizedName === role) {
        foundRole = true;
      }
    }

    return foundRole;
  }
}
