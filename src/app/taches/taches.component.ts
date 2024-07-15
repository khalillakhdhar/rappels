import { Component } from '@angular/core';
import { Tache } from '../shared/interfaces/tache';
import { TacheService } from '../shared/services/tache.service';
@Component({
  selector: 'app-taches',
  templateUrl: './taches.component.html',
  styleUrl: './taches.component.css'
})
export class TachesComponent {
  tache={} as Tache;
  taches:Tache[]=[];
  constructor(private tacheService: TacheService)
  {
    this.taches=this.tacheService.getTaches();

  }
addOneTache()
{
  this.tacheService.addTache(this.tache);
  this.tache={} as Tache;

}
deleteTache(id:number)
{
  if(confirm('vous voulez supprimer la tache?'))
  {
    this.tacheService.deleteTache(id);
  }
}

}
