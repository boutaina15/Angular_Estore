import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-eStore';
  dropdownOpen = false;

  currentIndex = 0;
  carouselItems = [
    { src: '../assets/images/phone.jpg', alt: 'Phone', title:'Phone' },
    { src: '../assets/images/Laptop.jpg', alt: 'Laptop', title:'Laptop' },
    { src: '../assets/images/Tablette.jpg', alt: 'Tablette', title:'Tablette' },
    { src: '../assets/images/Headphones.jpg', alt: 'Headphone', title:'Headphone' },
    { src: '../assets/images/Watch.jpeg', alt: 'Watch', title:'Watch' },
    { src: '../assets/images/Camera.webp', alt: 'Camera', title:'Camera' },
    { src: '../assets/images/gaming.jpg', alt: 'Gaming', title:'Gaming' },
    { src: '../assets/images/modem.jpg', alt: 'Modem', title:'Modem' },
    { src: '../assets/images/accessories.jpg', alt: 'Accessories', title:'Accessories' }
  
  ];

  prev() {
    this.currentIndex = (this.currentIndex === 0) ? this.carouselItems.length - 1 : this.currentIndex - 1;
  }

  next() {
    this.currentIndex = (this.currentIndex === this.carouselItems.length - 1) ? 0 : this.currentIndex + 1;
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
  
}
