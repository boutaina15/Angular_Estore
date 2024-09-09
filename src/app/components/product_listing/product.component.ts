import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @ViewChild('carouselContainer', { static: true }) carouselContainer!: ElementRef;

  categories = [
    { name: 'Mobile', image: '../assets/images/phone.jpg' },
    { name: 'Laptop', image: '../assets/images/Laptop.jpg' },
    { name: 'Tablette', image: '../assets/images/Tablette.jpg' },
    { name: 'Headphones', image: '../assets/images/Headphones.jpg' },
    { name: 'Watch', image: '../assets/images/Watch.jpeg' },
    { name: 'Camera', image: '../assets/images/Camera.webp' },
    { name: 'Gaming', image: '../assets/images/gaming.jpg' },
    { name: 'USB', image: '../assets/images/modem.jpg' },
    { name: 'Accessories', image: '../assets/images/accessories.jpg' }
  ];


  scrollLeft() {
    const container = this.carouselContainer.nativeElement;
    container.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    const container = this.carouselContainer.nativeElement;
    container.scrollBy({ left: 300, behavior: 'smooth' });
  }

  products = [
    { name: 'MacBook 16', image: '../assets/images/Laptop.jpg', price: 290.99 },
    { name: 'MacBook 16', image: '../assets/images/mcbk13.jpg', price: 490.99 },
    { name: 'MacBook 16', image: '../assets/images/mcbk16s.jpeg', price: 390.99 },
    { name: 'MacBook 16', image: '../assets/images/mcbk16.jpeg', price: 390.99 },
    { name: 'MacBook 16', image: '../assets/images/mcbk16s.jpeg', price: 390.99 },
    { name: 'MacBook 16', image: '../assets/images/mcbk16.jpeg', price: 390.99 },
    { name: 'MacBook 16', image: '../assets/images/mcbk19.jpg', price: 390.99 },
    { name: 'MacBook 16', image: '../assets/images/mcbk13.jpg', price: 490.99 },
    { name: 'MacBook 16', image: '../assets/images/mcbk16s.jpeg', price: 390.99 },
    { name: 'MacBook 16', image: '../assets/images/mcbk16.jpeg', price: 390.99 },
    { name: 'MacBook 16', image: '../assets/images/Laptop.jpg', price: 290.99 },
    { name: 'MacBook 16', image: '../assets/images/mcbk19.jpg', price: 390.99 }
  ];

}


