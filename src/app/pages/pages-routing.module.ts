import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Example } from './_example/example.component';
import { Home } from './home/home.component';


const routes: Routes = [
    { path: 'example', component: Example },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }