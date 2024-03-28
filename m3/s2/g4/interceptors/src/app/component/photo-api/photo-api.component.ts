import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../photo.service';
import { Photo } from '../../photo';

@Component({
  selector: 'app-photo-api',
  templateUrl: './photo-api.component.html',
  styleUrls: ['./photo-api.component.scss']
})
export class PhotoListComponent implements OnInit {

  photos!: Photo[];
  totalLikes!: number;

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    this.getPhotos();
    this.getLikes();
  }

  getPhotos(): void {
    this.photoService.getPhotos()
      .subscribe(
        photos => {
          this.photos = photos.map(photo => ({ ...photo, likes: photo.likes || 0 }));
        },
        error => {
          console.error('An error occurred:', error);
        }
      );
  }

  likePhoto(photo: Photo): void {
    this.photoService.likePhoto(photo);
  }

  deletePhoto(photo: Photo): void {
    this.photoService.deletePhoto(photo.id)
      .subscribe(
        () => {
          this.photos = this.photos.filter(p => p.id !== photo.id);
          console.log('Photo deleted successfully.');
        },
        error => {
          console.error('An error occurred while deleting the photo:', error);
        }
      );
  }

  getLikes(): void {
    this.photoService.getLikes()
      .subscribe(
        totalLikes => {
          this.totalLikes = totalLikes;
        }
      );
  }

}
