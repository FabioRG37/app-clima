import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app-clima';
   
  constructor() {}

  async ngOnInit() {
    setTimeout(async () => {
      await SplashScreen.hide();
    }, 500);
  }
}
