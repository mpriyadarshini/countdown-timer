import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  futureDate;
  seconds: number;
  minutes: number;
  hours: number;
  days: number;

  private interval: any

  constructor() {}
  ngOnInit(): void {}

  stop(){
    clearInterval(this.interval);
    
  }

  submit(futureDate) {
    //console.log(this.valueDate)
    this.interval = setInterval(() => {
      const dateNow = Date.now();
      const dateFuture = Date.parse(futureDate);
      console.log(dateFuture);
      console.log(dateNow);

      const seconds = Math.floor((dateFuture - dateNow) / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);

      this.days = days;
      this.hours = hours - days * 24;
      this.minutes = minutes - hours * 60;
      this.seconds = seconds - minutes * 60;
    }, 1000);
    
  }
}
