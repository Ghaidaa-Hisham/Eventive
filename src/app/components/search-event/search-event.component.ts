import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


export interface Item {
  id: number;
  color: string;
  price: number;
  sale: string;
  product: string;
  img: string;
  size: number[];
}

export interface BasicFilters {
  color: string | null;
  sale: string | null;
}
@Component({
  selector: 'app-search-event',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './search-event.component.html',
  styleUrl: './search-event.component.scss'
})
export class SearchEventComponent {
 items: Item[] = [
    {
      id: 1,
      color: 'black',
      price: 100,
      sale: 'no',
      product: 'Black Jeans Jacket',
      img: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/15.webp',
      size: [36, 40, 42],
    },
    {
      id: 2,
      color: 'black',
      price: 100,
      sale: 'no',
      product: 'Black Jeans Jacket',
      img: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/15.webp',
      size: [36, 38, 40, 42],
    },
    {
      id: 3,
      color: 'gray',
      price: 80,
      sale: 'yes',
      product: 'Gray Jumper',
      img: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/14.webp',
      size: [36, 38, 40],
    },
    {
      id: 4,
      color: 'gray',
      price: 80,
      sale: 'yes',
      product: 'Gray Jumper',
      img: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/14.webp',
      size: [40, 42],
    },
    {
      id: 5,
      color: 'red',
      price: 120,
      sale: 'yes',
      product: 'Red Hoodie',
      img: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/13.webp',
      size: [36, 40, 42],
    },
    {
      id: 6,
      color: 'blue',
      price: 90,
      sale: 'no',
      product: 'Blue Jeans Jacket',
      img: 'https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12.webp',
      size: [36, 38],
    },
  ];

  filteredItems$: Observable<Item[]>;
  filtersGroup: FormGroup;

  basicFilters: BasicFilters = {
    color: null,
    sale: null,
  };

  constructor() {
    this.filtersGroup = new FormGroup({
      color: new FormControl(),
      sale: new FormControl(),
    });

    this.filteredItems$ = this.filtersGroup.valueChanges.pipe(
      startWith(this.basicFilters),
      map((filters: BasicFilters) => {
        const { color, sale } = filters;
        let items = this.items;

        if (color) {
          items = items.filter((item) => item.color === color);
        }

        if (sale) {
          items = items.filter((item) => item.sale === sale);
        }

        return items;
      })
    );
  }

  clearFilters() {
    this.filtersGroup.reset();
  }
}


