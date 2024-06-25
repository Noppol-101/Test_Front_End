import { Component, OnInit } from '@angular/core';
import { FavoriteImageService } from '../favorite-image.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  images: any[] = [];
  filteredImages: any[] = [];
  dateImages: any[] = [];
  searchTerm: string = '';


  constructor(private FavoriteImageService: FavoriteImageService) { }

  ngOnInit(): void {
    this.fetchImages();
  }

  fetchImages(): void {
    this.FavoriteImageService.getAllImages().subscribe(
      response => {
        this.images = response;
        console.log(this.images);
        
        this.filteredImages = this.images; 
      },
      error => {
        console.error('Error fetching images', error);
      }
    );
  }

  search(): void {
    if (this.searchTerm.trim()) {
      this.filteredImages = this.images.filter(image =>
        image.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredImages = this.images;
    }
  }

  sort(order: string): void {
    this.filteredImages.sort((a, b) => {
      const titleA = a.createdDate.toLowerCase();
      const titleB = b.createdDate.toLowerCase();

      if (order === 'asc') {
        return titleA < titleB ? -1 : titleA > titleB ? 1 : 0;
      } else {
        return titleA > titleB ? -1 : titleA < titleB ? 1 : 0;
      }
    });
  }

}
