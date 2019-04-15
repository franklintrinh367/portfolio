import { Component, OnInit, OnDestroy } from '@angular/core';
import { scale } from '../shared/animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    scale()
  ]
})
export class HomeComponent implements OnInit, OnDestroy{

  isScale = false
  interval : any
  constructor() { }

  ngOnInit() {
    this.interval = setInterval(() => {
      this.isScale = !this.isScale
    }, 700)
  }

  ngOnDestroy() {
    clearInterval(this.interval)
  }

}
