import { AdresUpdateComponent } from './adres.update/adres.update.compenent';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdresCreateComponent } from './adres.create/adres.create.compenent';
import { AdresListComponent } from './adres.list/adres.list.compenent';

export const routes: Routes = [
  { path: 'adres', component: AdresListComponent },
  { path: '', redirectTo: 'adres', pathMatch: 'full' },
  { path: 'adres.add', component: AdresCreateComponent },
  { path: 'adres.update/:id', component: AdresUpdateComponent },
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
  