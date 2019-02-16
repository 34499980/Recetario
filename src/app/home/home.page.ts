import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecetasServiceService } from '../Services/recetas-service.service';
import { Receta } from '../Class/Receta';
import { Ingrediente } from '../Class/Ingrediente';
import * as firebase from 'Firebase';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  _recetaService: RecetasServiceService;
  infos = [];
  ref = firebase.database().ref('Recetas/');
  constructor(private router: Router, recetaService: RecetasServiceService){
    this._recetaService = recetaService;  
   
  }
  
  addInfo() {
    this.router.navigate(['/add-info']);
  }
  edit(key) {
    this.router.navigate(['/edit/'+key]);
  }

  launchNext(index: number){     
    this._recetaService._receta = this._recetaService._recetas[index];
   this.router.navigateByUrl('pagina-uno');
  }
  createReceta(){
    this._recetaService._receta = new Receta();
    this._recetaService._receta.Ingredientes = new Array<Ingrediente>();
    this.router.navigateByUrl('pagina-uno');
  }
  

}
export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
  });

  return returnArr;
};

