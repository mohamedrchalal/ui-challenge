import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  @Output() onFilter = new EventEmitter<object>();
  constructor() { }

  ngOnInit() {
  }

  filter(event: Event, filterConfig: object) {
    event.preventDefault();
    this.onFilter.emit(filterConfig)
  }
}
