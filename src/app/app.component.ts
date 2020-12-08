import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = "Clock";
  time = new Date();
  hour:any;
  minute:any;
  second:any;
  ampm:any;
  timer:any;
  isShow = true;
  isChange = false;

  ngOnInit() {
    this.timer = setInterval(() => {
      this.time = new Date();
      this.hour = this.time.getHours();
      this.minute = this.time.getMinutes();
      this.second = this.time.getSeconds();
      this.ampm = this.hour >= 12 ? 'PM' : 'AM';
      this.hour = this.hour % 12;
      this.hour = this.hour ? this.hour : 12;
      this.minute = this.minute < 10 ? '0'+this.minute : this.minute;
      this.second = this.second < 10 ? '0'+this.second : this.second;
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  changeTime(event:any){
    clearInterval(this.timer);
    this.isShow = false;
    this.isChange = true;
  }

  changeHour() {
  }
  changeMinute() {
  }
  changeSecond() {
  }

  resume(event:any){
    this.isShow = true;
    this.isChange = false;
    this.timer = setInterval(() => {
      let newtime = parseInt(this.second)+1;
      this.time = new Date(0,0,0,this.hour,this.minute,newtime);
      this.hour = this.time.getHours();
      this.minute = this.time.getMinutes();
      this.second = this.time.getSeconds();
      this.ampm = this.hour >= 12 ? 'PM' : 'AM';
      this.hour = this.hour % 12;
      this.hour = this.hour ? this.hour : 12;
      this.minute = this.minute < 10 ? '0'+this.minute : this.minute;
      this.second = this.second < 10 ? '0'+this.second : this.second;
    }, 1000);
  }
}