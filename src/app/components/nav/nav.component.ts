import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  dropdownOpen = false;


  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

}
