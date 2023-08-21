import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { RouterModule} from '@angular/router';
import { ROUTES } from './app.routes';
import { CategoriasComponent} from './categorias/categorias.component';
import { CategoriaComponent } from './categorias/categoria/categoria.component';
import { CategoriasService } from './categorias/categorias.service';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { FilmeComponent } from './filmes/filme/filme.component';
import { FilmesComponent } from './filmes/filmes.component';
import { FilmesService } from './filmes/filmes.service';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    AboutComponent,
    CategoriasComponent
    CategoriaComponent
    FooterComponent,
    FilmeComponent
    FilmesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
    HttpClientModule
  ],
  providers: [CategoriasService, FilmesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
