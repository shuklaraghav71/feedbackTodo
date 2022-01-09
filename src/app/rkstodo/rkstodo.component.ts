import { animate, animation, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { lastValueFrom, timeout } from 'rxjs';

@Component({
  selector: 'app-rkstodo',
  templateUrl: './rkstodo.component.html',
  styleUrls: ['./rkstodo.component.css']
})
export class RkstodoComponent implements OnInit {
  n = "rks";
  list = [1];
  x = '1';
  y = '1';
  taskList: any;
  isDone: boolean=false;
  timer: number=0;
  ms: number=1000;
   constructor(private http: HttpClient) {

  }

  async initCalls() {

    let url = 'http://localhost:8080/todo';
    return lastValueFrom( await this.http.post(`${url}`,{ "mytaskString": "this.n" }));
  }


 ngOnInit() {
    // let v =  await this.toPromise();
    // console.log(v)



 }
  startTask() {

   let c = 1;
     let a= setInterval(() => {
       this.timer = c;
       c++;
       if (this.timer == this.ms) {
         clearInterval(a);
         setTimeout(() => {


     if (!this.isDone) {
       this.smilyRain('cancel');
     }
   }

     , 1);
       }
     }, 1)
     console.log("break interval")


  }
   @ViewChild('myDiv')
  myDiv!: ElementRef;
  ngAfterViewInit() {
    console.log(this.myDiv);



  }
  smilyRain(id:string) {
    console.log(id)
    if ( id == 'right') {
      this.isDone = true;
    }


     let i = 0;
   let si= setInterval(() => {
      console.log("interval")
      i++
      for (let k = 0; k < 30;k++){
        this.list.push(i)}
      if (i == 10) {
        clearInterval(si);
}


// console.log("interval for")
//         if(i!=0){

//           this.x = (parseInt(this.x) + i).toString();
//           console.log("interval",i,this.x)


//       }

    },10)
  }

  // private async toPromise() {
  //   await this.http
  //     .post("http://localhost:8080/todo", {"mytaskString":"pp"})

  //     .toPromise()
  //     .then((t:any) => {
  //       t = JSON.parse(t)
  //       console.log("ToPromise [1]", t);
  //       return "1";
  //     });
  //   console.log("ToPromise [2]");
  //   return "2"
  // }

  onclick() {
    this.http.post("http://localhost:8080/todo", {"mytaskString":this.n}).subscribe(
      response => {
        console.log(response)
      }
    )
console.log("waitting..")
  }
  ondelete() {
    this.http.post("http://localhost:8080/tododel",this.n).subscribe(
      response => {
        this.onget()
        console.log(response)
      }
    )
  }
  onget() {
    this.http.get("http://localhost:8080/todo").subscribe(
      response => {
        console.log(response)
        this.taskList = response;
      }
    )
  }
}
