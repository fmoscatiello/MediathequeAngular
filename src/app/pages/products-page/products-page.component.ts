import { Component } from '@angular/core';
import { ProductListComponentComponent } from "./product-list-component/product-list-component.component";
import Album from '../../models/album.model';
import Film from '../../models/film.model';
import { FilmService } from '../../services/film.service';
import { AlbumService } from '../../services/album.service';

@Component({
    selector: 'app-products-page',
    standalone: true,
    templateUrl: './products-page.component.html',
    styleUrl: './products-page.component.css',
    imports: [ProductListComponentComponent]
})
export class ProductsPageComponent {
  films: Film[] = [];

  albums: Album[] = [];

/**
 *
 */
constructor(private filmService: FilmService, private albumService: AlbumService) {}

/**
 * sert à executer du code à la creation du composant
 */
ngOnInit(): void {
  this.filmService.getFilms().subscribe((films) => {this.films = films});
  this.albumService.getAlbums().subscribe((albums) => {this.albums = albums});
}
}
