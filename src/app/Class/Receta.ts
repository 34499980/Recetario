import { Ingrediente } from "./Ingrediente";
import { IReceta } from "../Interface/IReceta";

export class Receta implements IReceta{
   nombre: String;
   Ingredientes: Ingrediente[]
   descripcion: String;
   key: String;
}