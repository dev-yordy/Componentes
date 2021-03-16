import { Component, OnInit } from '@angular/core';

interface Componentes{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes: Array<Componentes> = new Array<Componentes> ();
   
  constructor() { }

  ngOnInit() {
    this.componentes = [{
      icon: 'game-controller-outline',
      name: 'Action-Shet',
      redirecTo: '/action-sheet'
    },
    {
      icon: 'american-football-outline',
      name: 'alerta',
      redirecTo: '/alert'
    },
    {
      icon: 'person-outline',
      name: 'Avatar',
      redirecTo: '/avatar'
    },
    {
      icon: 'play-outline',
      name: 'button',
      redirecTo: '/button'
    },
    {
      icon: 'card-outline',
      name: 'cards',
      redirecTo: '/card'
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'Check',
      redirecTo: '/check'
    },
    {
      icon: 'calendar-outline',
      name: 'DateTime',
      redirecTo: '/date-time'
    }
     
    ]
  }

}
