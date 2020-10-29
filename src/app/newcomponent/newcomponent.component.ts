import { Component, OnInit } from '@angular/core';
// import { setInterval } from 'timers';
declare var $ :any;
@Component({
  selector: 'app-newcomponent',
  templateUrl: './newcomponent.component.html',
  styleUrls: ['./newcomponent.component.css']
})
export class NewcomponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

//  counter = document.querySelector('.counter');
 btn = document.querySelector('.buttons');
 secondsInput = document.getElementById('seconds');
 seconds:number;
 minuts;
 remseconds;
 toCount;
 counter:any;




 subm(){
  this.display("submit", "start");
  this.seconds;
  // this.secondsInput.style.display = "none";
  this.counting();
}

display(first, second){
  document.getElementById(first).style.display = "none";
  document.getElementById(second).style.display = "block";
}

check(event,value){
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var id = idAttr.nodeValue;
    console.log("id",id)
    console.log("value",value)


  this.toCount = value;
  if(id == "start"){
    this.display("start", "stop");
  }
  else if(id == "stop"){
    this.display("stop", "continue");
  }
  else{
    this.display('continue', "stop");
  }
}

count(){
if(this.seconds > 0){
     if(this.toCount == true){
      this.seconds--;
      this.remseconds = this.seconds % 60;
      this.minuts = Math.floor(this.seconds / 60);

          if(this.remseconds < 10){
            this.remseconds = "0" + this.remseconds;
          }

          if(this.minuts < 10){
            this.minuts = "0" + this.minuts;
          }

          this.counter = this.minuts + " : " + this.remseconds;
     }
}
else{
  this.counter = "Done!";
  // this.btn.style.opacity = '0';
}
}

counting(){
  this.remseconds = this.seconds % 60;
  this.minuts = Math.floor(this.seconds / 60);

if(this.remseconds < 10){
  this.remseconds = "0" + this.remseconds;
}

if(this.minuts < 10){
  this.minuts = "0" + this.minuts;
}

this.counter = this.minuts + " : " + this.remseconds;
  setInterval(() => {
  this.count();
}, 1000);
}



}
