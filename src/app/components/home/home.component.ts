import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { animobjectifs, objectifText, animObject } from 'src/app/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    animobjectifs,
    objectifText,
    animObject
  ]

})
export class HomeComponent implements OnInit {

  nbItems: number 
  btnText: string = 'Ajouter un élément'
  objectifText: string = ''
  objectifs = []
  update = false
  index = 0
  animButton = false

  constructor(  private monRouter: Router,) { }

  ngOnInit(): void {
    this.nbItems = this.objectifs.length
  }

  // Ajouter un element 
  ajoutItem(){
     this.objectifs = [...this.objectifs, this.objectifText];
     this.objectifText = ''
     this.nbItems = this.objectifs.length

     setTimeout(()=> {
      return this.monRouter.navigate(['/about']);
     },3000)
    
  }

  // supprimer un element 
  deleteElt(i){
    
    this.objectifs.splice(i, 1);
    this.nbItems = this.objectifs.length
    
  }

  // editer un element 
  editElt(i){
    this.objectifText = this.objectifs[i];
    this.update = true
    this.btnText = 'Modifier cet élément'
    this.index = i
  }

  // modifier un element 
  updateElt(i: number){
    i = this.index
    this.objectifs[i] = this.objectifText;
    this.update = false
    this.objectifText = ''
    this.nbItems = this.objectifs.length
    this.btnText = 'Ajouter un élément'
  }

  // Annimation de bouton Ajouter

  annimButton(){
    if(this.objectifText != '') {
      this.animButton = true
    }else
    {
      this.animButton = false
    }
  }

}
