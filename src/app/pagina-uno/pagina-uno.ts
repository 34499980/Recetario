import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Receta} from '../Class/Receta'
import { RecetasServiceService } from '../Services/recetas-service.service';
import { Ingrediente } from '../Class/Ingrediente';

@Component({
  selector: 'PaginaUno',
  templateUrl: './pagina-uno.html',
  styleUrls: ['./pagina-uno.scss'],
})
export class PaginaUno implements OnInit {
_recetaService: RecetasServiceService
_ingrediente: Ingrediente;
_ingredientes: Array<Ingrediente> = new Array<Ingrediente>();
_receta: Receta;
nombre: String
txtIngrediente: String;
txtCantidad: String;
descReceta: String;
  constructor(private router: Router,private recetaServices: RecetasServiceService) {
     this._recetaService = recetaServices;    
     if(this._recetaService._receta == undefined){ 
      this._receta = new Receta();          
      this._receta.Ingredientes = new Array<Ingrediente>();
   } else{
     this._receta = this._recetaService._receta; 
     this.nombre =  this._recetaService._receta.nombre;
     this._ingredientes = this._recetaService._receta.Ingredientes == undefined? new Array<Ingrediente>(): this._recetaService._receta.Ingredientes;
     this.descReceta = this._recetaService._receta.descripcion;
   }
   }

  ngOnInit() { 

  }

  launchBack(){
    this.router.navigateByUrl('home')
  }
addItem(ingrediente,cantidad){
  if(ingrediente != null && cantidad != null && ingrediente !="" && cantidad !=""){   
   this._ingrediente = new Ingrediente();
   this._ingrediente.nombre = ingrediente;
   this._ingrediente.cant = cantidad;
   this._ingredientes.push(this._ingrediente);
   this.txtIngrediente = "";
   this.txtCantidad = "";

  }
}
removeItem(item, i){
  this._ingredientes.splice(i,1);  
}
saveReceta(descReceta: String){ 
  let rec = this.recetaServices._recetas.findIndex(item => item.nombre == this.nombre)
  if(rec == -1  && this.nombre != "" && this._receta.nombre == undefined)
  {
    this._receta.nombre = this.nombre;    
    this._receta.descripcion = this.descReceta;
    this._receta.Ingredientes = this._ingredientes
    this._recetaService.createReceta(this._receta);    
  }else{  
    if(this.nombre != ""){
      this._receta.nombre = this.nombre;
      this._receta.descripcion = this.descReceta;
      this._receta.Ingredientes = this._ingredientes 
      this._recetaService.updateReceta(this._receta)
    }
  }
  this.launchBack();
  
}
removeReceta(nombreReceta: String){
  let index = this._recetaService._recetas.findIndex(item => item.nombre== nombreReceta)
  this._recetaService.removeReceta(this._recetaService._recetas[index]);
  this.launchBack();
}

}
