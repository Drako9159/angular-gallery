import { Component, Input } from '@angular/core';
import { Photo } from '../../../models/photo';

@Component({
  selector: 'app-photo',
  standalone: true,
  imports: [],
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.css',
})
export class PhotoComponent {
  @Input()
  photo!: Photo;
}
