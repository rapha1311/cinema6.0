import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { CategoriasComponent } from "./categorias/categorias.component";
import { MainComponent } from "./main/main.component";
import { FilmesComponent } from "./filmes/filmes.component";

export const ROUTES: Routes = [
   {path: 'home', component: MainComponent},
   {path: 'sobre', component: AboutComponent},
   {path: 'categorias', component: CategoriasComponent},
   {path: 'filmes/:id', component: FilmesComponent}
];