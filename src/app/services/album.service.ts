import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Album from '../models/album.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  //ceci est l'url de notre back , ici on a mi la BDD mais ce n'est pas comme cela en prod
  private apiUrl: string = "http://localhost:3000";

  //on indique au constructeur qu'il prend en parametre un httpclient
  //car c'est lui qui permet de faire les requetes http post/put/get/delete
  constructor(private httpClient : HttpClient) { }


  // methode findAll()
  getAlbums(): Observable<Album[]>{
    return this.httpClient.get<Album[]>(`${this.apiUrl}/albums`);
  }

    // methode findById()
  getAlbum(id: number): Observable<Album>{
    return this.httpClient.get<Album>(`${this.apiUrl}/albums/${id}`);
  }

  // methode save()
  createAlbum(album: Album): Observable<Album>{
    return this.httpClient.post<Album>(`${this.apiUrl}/albums`,album);
  }

  //methode merge()
  updateAlbum(album: Album): Observable<Album>{
    return this.httpClient.put<Album>(`${this.apiUrl}/albums/${album.id}`,album);
  }

  //methode deleteById()
  deleteAlbum(id: number): Observable<Album>{
    return this.httpClient.delete<Album>(`${this.apiUrl}/albums/${id}`);
  }
}
