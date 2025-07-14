import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userstatus',
  imports: [],
  templateUrl: './userstatus.component.html',
  styleUrl: './userstatus.component.css',
})
export class UserstatusComponent implements OnInit {
  status = 'online';
  private intervalId?: any;

  ngOnInit() {
    // Simulate a status change after 3 seconds
    this.intervalId = setInterval(() => {
      const value = Math.random();
      if (value < 0.52) {
        this.status = 'online';
      } else {
        this.status = 'offline';
      }
    }, 5000);
  }
  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
