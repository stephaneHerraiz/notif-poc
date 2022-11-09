import { Component, OnInit } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { trace } from '@angular/fire/performance';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'poc-fcm-app';

  ngOnInit(): void {
    // this.request();
    this.listen();
  }

  request() {
    // this.messaging.requestPermission.subscribe(
    //   () => { console.log('Permission granted!'); },
    //   (error) => { console.error(error); },  
    // );
    this.listen();
  }

  token$: Observable<any>;
  message$: Observable<any>;
  showRequest = false;

  constructor(public readonly messaging: AngularFireMessaging) {
    // messaging.tokenChanges.subscribe( (res) => {
    //   console.log(res);
    //   this.request();
    // },
    // (err => {
    //   console.error(err);
    // }));
    this.messaging.requestToken
      .subscribe(
        (token) => { console.log('Permission granted! Save to the server!', token); },
        (error) => { 
          console.log(error);
        },  
      );
  }

  listen() {
    this.messaging.messages
      .subscribe((message) => { 
        console.log(`message: ${message}`); 
      },
      (err) => {
        console.error(err);
      }
      )
  }
}
