import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecetasServiceService } from '../Services/recetas-service.service';
import { Receta } from '../Class/Receta';
import { Ingrediente } from '../Class/Ingrediente';
import * as firebase from 'Firebase';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  _recetaService: RecetasServiceService;
  _recetas: any
  searchItem: any
 
  ref = firebase.database().ref('Recetas/');
  constructor(private router: Router, recetaService: RecetasServiceService,){
    this._recetaService = recetaService;    
  
  
   
  }
  public Filtrar(searchItem){
    if(searchItem==" " || searchItem==undefined || searchItem.length-1 == 0){
      this._recetaService._recetasFiltradas = this._recetaService._recetas 
    }else{
      this._recetaService._recetasFiltradas = new Array<Receta>();  
      for(let index in this._recetaService._recetas){
        let rec = this._recetaService._recetas[index] as Receta
        if(rec.nombre.indexOf(searchItem) != -1){
          this._recetaService._recetasFiltradas.push(rec)
        }

      }
     
      //this._recetaService._recetasFiltradas = this._recetaService._recetas.filter(item => {item.nombre.indexOf(searchItem)!=-1})
     /* for(let index in object){
        this._recetaService._recetasFiltradas.push(this._recetaService._recetas[index])
      }*/
  
    }
 }



  launchNext(index: number){     
    this._recetaService._receta = this._recetaService._recetasFiltradas[index];
   this.router.navigateByUrl('pagina-uno');
  }
  createReceta(){
    this._recetaService._receta = new Receta();
    this._recetaService._receta.Ingredientes = new Array<Ingrediente>();
    this.router.navigateByUrl('pagina-uno');
  }
  

}


