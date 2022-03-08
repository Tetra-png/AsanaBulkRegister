import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-selected-list',
  templateUrl: './app-selected-list.component.html',
  styleUrls: ['./app-selected-list.component.scss']
})
export class AppSelectedListComponent implements OnInit {
  @Input() keywords: string[]

  constructor() { }

  ngOnInit(): void {
  }

}
