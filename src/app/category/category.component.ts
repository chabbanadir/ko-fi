import { Component ,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit  {
  @Input() categories: any[] =[] ;

  cts = [
    { name: 'Food', icon: '/assets/logo.png' },
    { name: 'Clothes', icon: '/assets/logo.png' },
    { name: 'Electronics', icon: '/assets/logo.png' },
    { name: 'Food', icon: '/assets/logo.png' },
    { name: 'Clothes', icon: '/assets/logo.png' },
    { name: 'Electronics', icon: '/assets/logo.png' },
    { name: 'Food', icon: 'fastfood' },
    { name: 'Clothes', icon: 'shirt' },
    { name: 'Electronics', icon: 'phone_iphone' },
    { name: 'Food', icon: 'fastfood' },
    { name: 'Clothes', icon: 'shirt' },
    { name: 'Electronics', icon: 'phone_iphone' },
    { name: 'Food', icon: 'fastfood' },
    { name: 'Clothes', icon: 'shirt' },
    { name: 'Electronics', icon: 'phone_iphone' },
    { name: 'Food', icon: 'fastfood' },
    { name: 'Clothes', icon: 'shirt' },
    { name: 'Electronics', icon: 'phone_iphone' },
    { name: 'Food', icon: 'fastfood' },
    { name: 'Clothes', icon: 'shirt' },
    { name: 'Electronics', icon: 'phone_iphone' },
    { name: 'Food', icon: 'fastfood' },
    { name: 'Clothes', icon: 'shirt' },
    { name: 'Electronics', icon: 'phone_iphone' },
    { name: 'Food', icon: 'fastfood' },
    { name: 'Clothes', icon: 'shirt' },
    { name: 'Electronics', icon: 'phone_iphone' },

];
  
  ngOnInit(){
    this.categories = [];
  } 
  onCategoriesChange(categories: any[]) {
    this.categories = categories;
  }
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  currentIndex = 0;
  slideState = '';

  


  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.slideState = 'prev';
    }
  }
  next() {
    if (this.currentIndex < this.items.length - 1) {
      this.currentIndex++;
      this.slideState = 'next';
    }
  }
}
