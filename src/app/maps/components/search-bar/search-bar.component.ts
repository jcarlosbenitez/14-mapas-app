import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../services';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  private debounceTimer?: NodeJS.Timer;
  constructor(private placesService: PlacesService) { }

  ngOnInit(): void {
  }
  onQueryChange(query: string=''){

    if(this.debounceTimer) clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() =>{
      console.log('Mandar query:', query)
      this.placesService.getPlacessByQuery(query)
    },350)
    

  }

}
