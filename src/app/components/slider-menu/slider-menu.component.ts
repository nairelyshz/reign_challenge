import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slider-menu',
  templateUrl: './slider-menu.component.html',
  styleUrls: ['./slider-menu.component.css']
})
export class SliderMenuComponent implements OnInit {
  currentTab: number = 0;
  @Output() onChangeTab = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  changeTab(index: number) {
    this.currentTab = index;
    this.onChangeTab.emit(this.currentTab)
  }

}
