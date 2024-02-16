import { Component, OnInit } from '@angular/core';
import { PhotoComponent } from './photo/photo.component';
import { Photo } from '../../models/photo';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [PhotoComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent implements OnInit {
  photoTest = new Photo();
  ngOnInit(): void {
    this.photoTest.url =
      'https://cdn.pixabay.com/photo/2013/07/18/10/56/railroad-163518_1280.jpg';
  }
}
