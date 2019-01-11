import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { HttpServerServices } from '../http-server.service';
import { timeout, delay } from 'q';

@Component({
  selector: 'app-flicker-image',
  templateUrl: './flicker-image.component.html',
  styleUrls: ['./flicker-image.component.css']
})
export class FlickerImageComponent implements OnInit {

  constructor(private httpServices: HttpServerServices) { }
  searchText = '';
  showLoader = false;
  showErrorMessage = false;
  errorMessage = '';
  data=[];
  url = 'https://api.flickr.com/services/rest/?';
  method ='flickr.photos.getRecent';
  per_page = 12;
  page = 1;
  api_key = '4e25044260a3da7ab45b668ad9c04802';
  format = 'json';
  getResults(){
    this.showLoader = true;
    var uri = this.url+ 
    "method="+ this.method + 
    "&page=" + this.page + 
    "&per_page=" + this.per_page + 
    "&api_key=" + this.api_key + 
    "&format=" + this.format +
    "&nojsoncallback=1"+
    "&tags="+this.searchText;

  	this.httpServices.getRequest(uri).subscribe(
  		(response:Response) => {
        if(response.json().stat == "ok"){
          this.showErrorMessage = false;
          var photo1:any = response.json().photos.photo;
          for(let i =0; i<photo1.length; i++) {
            this.data.push(photo1[i])
          }
          this.showLoader = false;
        }
        else{
          this.errorMessage = response.json().message;
          this.showLoader = false;
          this.showErrorMessage = true;
        }
  		},
  		(error) => {
        console.log(error);
      }
  	);
  } 
  onSearch(){
    this.method = 'flickr.photos.search'
    this.data = [];
    this.getResults();
  }
  onScroll(event: any) {
    // visible height + pixel scrolled >= total height 
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight-10) {
      this.page++;
      this.getResults();
    }
  }
  
  
  ngOnInit() {
    this.getResults();
  }

}
