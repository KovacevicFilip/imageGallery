import { Component, OnInit } from '@angular/core';
import { PojedinacniAlbumiService } from 'src/app/pojedinacni-albumi.service';
import { CarouselComponent } from './carousel/carousel.component';
import * as $ from 'jquery';

@Component({
  selector: 'app-pojedinacni-albumi',
  templateUrl: './pojedinacni-albumi.component.html',
  styleUrls: ['./pojedinacni-albumi.component.css']
})
export class PojedinacniAlbumiComponent implements OnInit {
  
  open(){

    $(".pojedinacniAlbumi").hide();
    $(".carouselWrapper").show();
    console.log("radi");

  }
  delete(){

  };
 //method that changes view of the grid

  changeGridToSquareP(){
    $(".gridListViewP").hide();
    $(".gridViewP").show();
    
  }

  changeGridToListP(){
    $(".gridListViewP").show();
    $(".gridViewP").hide(); 
     
  }
  //method that returns on previous page

  return(){
    
    $(".pojedinacniAlbumi").hide();
    $(".albumi").show();
    
  }

  onSearchAlbums(event: any) {
    
    let searchValue = event.target.value;
    
 }
  public photos: any = [];

  constructor(private data: PojedinacniAlbumiService) { }

  ngOnInit(): void {
    
    this.data.sendGetRequest().subscribe((photos = [])=>{

      this.photos = photos;               

    })
  }

}

