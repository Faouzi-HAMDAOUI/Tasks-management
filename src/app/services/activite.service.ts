import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActiviteService {
  objectifs = [];
  objectif = [];
  constructor() { }

  newElemente(elt: string){
    this.objectifs = [...this.objectifs, elt];

  }
  deleteElem(id){
    return this.objectifs.slice(id, 1);
  }
}
