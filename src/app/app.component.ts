import { Component } from '@angular/core';
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  constructor(private authService: AuthService) {

  }

  public authorize() {
    this.authService.startAuthentication();
  }

  title = 'IMS-client';
}
