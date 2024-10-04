import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';


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
  filtersGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.filtersGroup = this.fb.group({
      category: [''],
      date: [''],
      price: ['']
    });
  }

  clearFilters() {
    this.filtersGroup.reset();  // Reset the form, clearing all selected filters
  }
}


