import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-eStore';
  dropdownOpen = false;
  currentIndex = 0; // Index of the first item in the current set
  itemsPerPage = 3;
  carouselItems = [
    { src: '../assets/images/phone.jpg', alt: 'Phone', title: 'Phone' },
    { src: '../assets/images/Laptop.jpg', alt: 'Laptop', title: 'Laptop' },
    { src: '../assets/images/Tablette.jpg', alt: 'Tablette', title: 'Tablette' },
    { src: '../assets/images/Headphones.jpg', alt: 'Headphone', title: 'Headphone' },
    { src: '../assets/images/Watch.jpeg', alt: 'Watch', title: 'Watch' },
    { src: '../assets/images/Camera.webp', alt: 'Camera', title: 'Camera' },
    { src: '../assets/images/gaming.jpg', alt: 'Gaming', title: 'Gaming' },
    { src: '../assets/images/modem.jpg', alt: 'Modem', title: 'Modem' },
    { src: '../assets/images/accessories.jpg', alt: 'Accessories', title: 'Accessories' }
  ];

  prev() {
    this.currentIndex -= this.itemsPerPage;
    if (this.currentIndex < 0) {
      // Wrap around to the end if going back from the start
      const remainder = this.carouselItems.length % this.itemsPerPage;
      this.currentIndex = remainder === 0 ? this.carouselItems.length - this.itemsPerPage : this.carouselItems.length - remainder;
    }
  }

  next() {
    this.currentIndex += this.itemsPerPage;
    if (this.currentIndex >= this.carouselItems.length) {
      // Wrap around to the start if exceeding the end
      this.currentIndex %= this.itemsPerPage;
    }
  }

  get currentPageItems() {
    const start = this.currentIndex;
    const end = Math.min(start + this.itemsPerPage, this.carouselItems.length); // Ensure we don't exceed array bounds
    return this.carouselItems.slice(start, end);
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

}
