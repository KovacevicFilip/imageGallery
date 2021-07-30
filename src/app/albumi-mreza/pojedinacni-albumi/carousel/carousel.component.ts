import { PojedinacniAlbumiService } from 'src/app/pojedinacni-albumi.service';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';




@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})

export class CarouselComponent implements OnInit {

  public albums: any = [];  

  constructor(private data: PojedinacniAlbumiService) { }

  ngOnInit(): void {
    
    this.data.sendGetRequest().subscribe((photos = [])=>{

      this.albums = photos;  
      console.log(this.albums[0])     

    })
  }
    counter = 0;
  
   changeCarousel(e:any){
     
     console.log(e.target.className);
      if(e.target.className == "carousel-control-next-icon") {
        if(this.counter == this.albums.length - 1){
          this.counter = 0
        }
        else this.counter++;
        console.log(this.counter);
      }
     
     if(e.target.className == "carousel-control-prev-icon"){
       if(this.counter == 0){
         this.counter = this.albums.length - 1
       }
       else this.counter--;
       console.log(this.counter);
     }
  }
}
