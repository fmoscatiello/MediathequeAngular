import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import Album from '../../../models/album.model';
import Film from '../../../models/film.model';
import { AlbumService } from '../../../services/album.service';
import { FilmService } from '../../../services/film.service';

@Component({
  selector: 'app-product-page',
  standalone: true,
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css',
  imports: [ProductDetailsComponent],
})
export class ProductPageComponent {
  product!: Film | Album;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private filmService: FilmService,
    private albumService: AlbumService
  ) {}

  /**
   * fonction pour afficher le film en fonction de l'id passé en paramètre
   * @param id
   */
  private subscribeFilm(id: number): void {
    this.filmService.getFilm(id).subscribe({
      next: (film) => (this.product = film), // tant qu'il y a un film dnas product ,on l'affiche
      error: (err) => console.error('Erreur au chargement , erreur'), // sinon on affiche l'erreur
    });
  }

  /**
   * fonction pour afficher l'album en fonction de l'id passé en paramètre
   * @param id
   */
  private subscribeAlbum(id: number): void {
    this.albumService.getAlbum(id).subscribe({
      next: (album) => (this.product = album), // tant qu'il y a un album dans product ,on l'affiche
      error: (err) => console.error('Erreur au chargement , erreur'), // sinon on affiche l'erreur
    });
  }

  private setSubscribe(type: string | null, id: string | null): void {
    if (type === 'films' && id) {
      this.subscribeFilm(+id); // on ajout l'id dans notre route url pour visualiser le film
    }else if (type === 'albums' && id) {
      this.subscribeAlbum(+id); // on ajout l'id dans notre route url pour visualiser l'album
    }else{
      this.router.navigate(['/not-found']); //on redirige vers la page d'erreur not found
    }
  }

  //on a simulé un service ici, cela n'existe pas en prod
  ngOnInit(): void {
    const type = this.route.snapshot.paramMap.get('type');
    const id = this.route.snapshot.paramMap.get('id');
    this.setSubscribe(type,id);
  }
}
