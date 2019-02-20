import { Injectable } from '@angular/core';
import { Receta } from '../Class/Receta';
import * as firebase from 'Firebase';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RecetasServiceService {
  [x: string]: any;
 
  _receta : Receta;
  _recetas: any;
   db: any;
   _recetasFiltradas: any;
  constructor(database: AngularFireDatabase) {   
    this.db = database.list('/Recetas')
    this.getRecetario()
   }

  public addItem(ingrediente,cantidad){
    if(ingrediente != null && cantidad != null){     
      this._recetaService._recetario.push(this._receta);    
    }
  }
 public removeItem(i){
    this._recetario.splice(i,1);
   
  }
  public createReceta(receta: Receta){
   // this._recetario.push(receta)
  //  const recet: firebase.database.Reference = firebase.database().ref('/'+receta.nombre+'/');
  //  recet.set({receta})
   receta.key = this.db.push(receta).key
   //receta.key = receta.key.substring(1)
   this.updateReceta(receta)
  }
  public removeReceta(receta: Receta){
   // this._recetario.splice(index,1)
   this.db.remove(receta.key)
   
  }
  public updateReceta(receta: Receta){
    this.db.update(receta.key,{nombre: receta.nombre,
                                key: receta.key,
                               descripcion: receta.descripcion,
                               Ingredientes: receta.Ingredientes})
  }
public getRecetario(){
  this.db.valueChanges().subscribe(data => {this._recetas=data, this._recetasFiltradas=data}
   )
 
}
}
