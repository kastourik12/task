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
  tvShows!: tvShow[];
  keyword = '';
  sortType= '';
  constructor() {


  }

  ngOnInit(): void {
    this.tvShows = shows;
  }


  addFavorite(show : tvShow ) {
    show.favorite=!show.favorite;
  }
  sortShows() {

    if (this.sortType == 'Year ascending') {
      this.tvShows.sort((a, b) => a.year > b.year ? 1 : -1)
    }
    if (this.sortType == 'Year descending') {
      this.tvShows.sort((a, b) => a.year < b.year ? 1 : -1)
    }
    if(this.sortType == 'Favorites'){
      this.tvShows.sort((a )=> a.favorite ? 0:1)
    }
    if(this.sortType == 'Title ascending'){
      this.tvShows.sort((a, b) => a.title > b.title ? 1 : -1)
    }
    if(this.sortType == 'Title descending'){
      this.tvShows.sort((a, b) => a.title < b.title ? 1 : -1)
    }
  }



}
