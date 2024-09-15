import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  dropdownOpen = false;
  router: any;


  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  landingPage(): void {
    alert("button clicked");
    this.router.navigate(['/landing-page']);
  }

  wishlistPage(): void {
    alert("button clicked");
    this.router.navigate(['/wishlist']);
  }

  cartPage(): void {
    alert("button clicked");
    this.router.navigate(['/cart']);
  }

}
