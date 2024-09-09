import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  categories = [
    { name: 'Mobile', image: '../assets/images/phone.jpg' },
    { name: 'Laptop', image: '../assets/images/Laptop.jpg' },
    { name: 'Tablette', image: '../assets/images/Tablette.jpg' },
    { name: 'Headphones', image: '../assets/images/Headphones.jpg' },
    { name: 'Watch', image: '../assets/images/Watch.jpeg' },
    { name: 'Camera', image: '../assets/images/Camera.webp' },
    { name: 'Gaming', image: '../assets/images/gaming.jpg' },
    { name: 'USB', image: '../assets/images/modem.jpg' },
    { name: 'Accessories', image: '../assets/images/cable.avif' }
  ];

  products = [
    { name: 'MacBook 16', image: '../assets/images/mcbk19.jpg', price: 390.99, oldprice: 590.99 },
    { name: 'MacBook 16', image: '../assets/images/mcbk13.jpg', price: 490.99, oldprice: 890.99 },
    { name: 'Mouse', image: '../assets/images/mouse.webp', price: 390.99, oldprice: 790.99 },
    { name: 'Phone', image: '../assets/images/phonee.jpeg', price: 390.99, oldprice: 690.99 },
    { name: 'MacBook 16', image: '../assets/images/mcbk16s.jpeg', price: 390.99, oldprice: 790.99 },
    { name: 'MacBook 16', image: '../assets/images/mcbk16.jpeg', price: 390.99, oldprice: 690.99 },
    { name: 'MacBook 16', image: '../assets/images/mcbk19.jpg', price: 390.99, oldprice: 590.99 },
    { name: 'headphone', image: '../assets/images/Headphone.jpg', price: 490.99, oldprice: 890.99 },
    { name: 'MacBook 16', image: '../assets/images/mcbk13.jpg', price: 490.99, oldprice: 890.99 },
    { name: 'Mouse', image: '../assets/images/mouse.webp', price: 390.99, oldprice: 790.99 },
    { name: 'Phone', image: '../assets/images/phonee.jpeg', price: 390.99, oldprice: 690.99 }
  ];

  latest = [
    { name: 'headphones', image: '../assets/images/Headphone.jpg', price: 490.99 },
    { name: 'MacBook 16', image: '../assets/images/mcbk16s.jpeg', price: 390.99 },
    { name: 'watch', image: '../assets/images/Watch.jpeg', price: 390.99 },
    { name: 'airpod', image: '../assets/images/airpod.jpg', price: 290.99 },
    { name: 'console', image: '../assets/images/cable.avif', price: 390.99 },
    { name: 'MacBook 16', image: '../assets/images/mcbk16.jpeg', price: 390.99 },
    { name: 'MacBook 16', image: '../assets/images/mcbk19.jpg', price: 390.99 },
    { name: 'headphones', image: '../assets/images/Headphone.jpg', price: 490.99 },
    { name: 'MacBook 16', image: '../assets/images/mcbk16s.jpeg', price: 390.99 },
    { name: 'watch', image: '../assets/images/Watch.jpeg', price: 390.99 },
    { name: 'airpod', image: '../assets/images/airpod.jpg', price: 290.99 },
    { name: 'console', image: '../assets/images/cable.avif', price: 390.99 }
  ];

}
