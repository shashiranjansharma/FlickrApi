import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpServerServices } from './http-server.service';
import { FlickerImageComponent } from './flicker-image/flicker-image.component'

@NgModule({
  declarations: [
    AppComponent,
    FlickerImageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [HttpServerServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
