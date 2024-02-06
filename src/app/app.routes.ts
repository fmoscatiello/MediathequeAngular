import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { ProductPageComponent } from './pages/products-page/product-page/product-page.component';


export const routes: Routes = [
    //si pas d'url saisie, on redirige vers la home page :
    { path: '', redirectTo: 'home', pathMatch:'full'},
    //route vers la page home
    { path: 'home', component: HomePageComponent},
    //route vers la page product
    { path: 'products', component: ProductsPageComponent},

    //route vers la page contenant le type de produit (album ou film) en paramètre
    { path: 'products/:type', component: ProductPageComponent},

    //route vers la page product avec l'id du composant (album ou film) en paramètre
    { path: 'products/:type/:id', component: ProductPageComponent},
    
    //doit être déclaré à la fin, car les "**" indiquent que rien en sera lu après
    //si on entre un path qui ne fait pas partie de la liste, on redifige vers la page Not-Found
    { path: '**', component: NotFoundComponent},
];
