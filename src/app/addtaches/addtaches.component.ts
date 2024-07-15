import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tache } from '../shared/interfaces/tache';
import { TacheService } from '../shared/services/tache.service';

@Component({
  selector: 'app-addtaches',
  templateUrl: './addtaches.component.html',
  styleUrl: './addtaches.component.css'
})
export class AddtachesComponent {
  tache={} as Tache;
  constructor(private tacheService: TacheService,private route:Router)
  {

  }
addOneTache()
{
  localStorage.setItem('tache',this.tache.titre)

  this.route.navigate(['../taches'])

}
}
