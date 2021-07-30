import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../gallery.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-albumi-mreza',
  templateUrl: "./albumi-mreza.component.html",
  styleUrls: ['./albumi-mreza.component.css']
})

export class AlbumiMrezaComponent implements OnInit {
  
  forward(){
    $(".pojedinacniAlbumi").show();
    $(".albumi").hide();
  }

  changeGridToSquare(){
    $(".gridListView").hide();
    $(".gridView").show();
    console.log("change list to square in albumi mreza");
  }

  changeGridToList(){
    $(".gridListView").show();
    $(".gridView").hide();
    console.log("change grid to list view in albumi mreza");
  }
    
    public albums: any = [];
     

  constructor(private dataService: GalleryService) { }

  ngOnInit(): void {
    
    this.dataService.sendGetRequest().subscribe((albums = [])=>{

      this.albums = albums;           

    })
  }
}









