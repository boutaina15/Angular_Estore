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
    { src: '../assets/images/phone.jpg', alt: 'First slide', title:'phone' },
    { src: '../assets/images/test.jpg', alt: 'Second slide', title:'test' },
    { src: '../assets/images/slide3.jpg', alt: 'Third slide', title:'hv' },
    { src: '../assets/images/phone.jpg', alt: 'First slide', title:'phoneé' }
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
