import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

export interface ExampleTab {
  label: string;
  content: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  asyncTabs: Observable<ExampleTab[]>;

  constructor() { 
    this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          {label: 'Associate Support', content: 'Content 1'},
          {label: 'Partner Support', content: 'Content 2'},
          {label: 'Other', content: 'Content 3'},
        ]);
      }, 1000);
    });
  }

  ngOnInit() {
  }

}
