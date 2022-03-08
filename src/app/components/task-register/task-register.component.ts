import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-task-register',
  templateUrl: './task-register.component.html',
  styleUrls: ['./task-register.component.scss']
})
export class TaskRegisterComponent implements OnInit {

  messages = [
    {
      from : "hoge",
      subject: "fuga",
      content: "cfjkodas",
      name: "jphe",
      updated: "hdsaohida"
    },
    {
      from : "hoge",
      subject: "fuga",
      content: "cfjkodas",
      name: "jphe",
      updated: "hdsaohida"
    },
    {
      from : "hoge",
      subject: "fuga",
      content: "cfjkodas",
      name: "jphe",
      updated: "hdsaohida"
    }
  ]
  foods = [
    {
      value: "fuga",
      viewValue: "hoge"
    }
  ]

  keys = [
  ]

  filteredOptions: Observable<string[]>;
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];

  constructor() {}

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
