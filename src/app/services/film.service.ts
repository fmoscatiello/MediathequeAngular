import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Film from '../models/film.model';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  
  //ceci est l'url de notre back , ici on a mit la BDD mais ce n'est pas comme cela en prod
  private apiUrl: string = "http://localhost:3000";

  //on indique au constructeur qu'il prend en parametre un httpclient
  //car c'est lui qui permet de faire les requetes http post/put/get/delete
  constructor(private httpClient : HttpClient) { }


  // methode findAll()
  getFilms(): Observable<Film[]>{
    return this.httpClient.get<Film[]>(`${this.apiUrl}/films`);
  }

    // methode findById()
  getFilm(id: number): Observable<Film>{
    return this.httpClient.get<Film>(`${this.apiUrl}/films/${id}`);
  }

  // methode save()
  createFilm(film: Film): Observable<Film>{
    return this.httpClient.post<Film>(`${this.apiUrl}/films`,film);
  }

  //methode merge()
  updateFilm(film: Film): Observable<Film>{
    return this.httpClient.put<Film>(`${this.apiUrl}/films/${film.id}`,film);
  }

  //methode deleteById()
  deleteFilm(id: number): Observable<Film>{
    return this.httpClient.delete<Film>(`${this.apiUrl}/films/${id}`);
  }

}
