import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html',
})
export class HeroeComponent  {
  public nombre:string = 'Saitama';
  public edad:number = 20;

  get nombreM():string{
    return this.nombre.toUpperCase()
  }

  cambiarHeroe(){
    this.nombre = 'Saitama';
    this.edad = 20;
  } 

  cambiarVillano(){
    this.nombre = 'Garou';
    this.edad = 21;
  } 
}
