import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Animal } from './animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(private httpClient: HttpClient) { }

  public get(): Observable<any>{
    return this.httpClient.get('http://localhost:8080/animal');
  }

  public post(animal: Animal): Observable<any>{
    return this.httpClient.post('http://localhost:8080/animal', animal);
  }

  public delete(id : number): Observable<any>{
    // @ts-ignore
    return this.httpClient.delete('http://localhost:8080/animal/' + id);
  }

  public put(animal: Animal): Observable<any>{
    return this.httpClient.post('http://localhost:8080/animal', animal);
  }
}
