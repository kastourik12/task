import { Component, OnInit } from '@angular/core';
import { tvShow } from 'src/app/shared/tvShow';
import {MatTableDataSource} from "@angular/material/table";


const shows : tvShow[] =[
  {title : "Game Of Thrones", year : 2011 , favorite : false},
  {title : "Greys Anatomy", year : 2005 , favorite : false},
  {title : "Walking Dead", year : 2010 , favorite : false},
  {title : "Firefly", year : 2002 , favorite : false},
  {title : "Banshee", year : 2013 , favorite : false},
]


@Component({
  selector: 'app-display-shows',
  templateUrl: './display-shows.component.html',
  styleUrls: ['./display-shows.component.scss']
})
export class DisplayShowsComponent implements OnInit {
  tvShows = shows;
  keyword = '';
  sortType= '';
  constructor() {

  }

  ngOnInit(): void {
  }


  addFavorite(show : tvShow ) {
    show.favorite=!show.favorite;
  }
  sortData(){
    if(this.sortType == '')
    {

    }

  }
}
