import { Component } from '@angular/core';
import { HttpServerServices } from './http-server.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'FlickerAPI';
  constructor() { }
}
