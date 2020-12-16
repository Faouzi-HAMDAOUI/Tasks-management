import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActiviteService } from 'src/app/services/activite.service';

@Component({
  selector: 'app-consult-activite',
  templateUrl: './consult-activite.component.html',
  styleUrls: ['./consult-activite.component.scss']
})
export class ConsultActiviteComponent implements OnInit {
  id: string;
  
  nom: string;
  objectifs = [] 
  objectif = [] 
  update = false
  constructor(private monRouter: Router, private route: ActivatedRoute, private activiteService: ActiviteService) { }

  ngOnInit(): void {

    this.objectifs = this.activiteService.objectifs;
    
    if(this.route.snapshot.params['id'] != '')
    {
      this.id = this.route.snapshot.params['id'];
      this.objectif = this.objectifs[this.id];
    }
    if(this.route.snapshot.params['nom'] != '')
    {
    this.nom = this.route.snapshot.params['nom'];
    }
  }

  // supprimer l'element 
  delete(i){
    
   this.objectifs.splice(i, 1); 
    return this.monRouter.navigate(['/']);
  }

  // editer un element 
  editElt(id){
    
    this.update = true
    
  }
  // modifier un element 
  updateElt(i){
    
    this.objectifs[i] = this.objectif;
    this.update = false
    
  }

  

}
