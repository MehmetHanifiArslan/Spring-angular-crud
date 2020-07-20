
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.model';
import { AppComponent } from './app.component';
import { BasComponent } from './bas/bas.compenent';
import { AdresListComponent } from './adres.list/adres.list.compenent';
import { AdresCreateComponent } from './adres.create/adres.create.compenent';
import { AdresUpdateComponent } from './adres.update/adres.update.compenent';

@NgModule({
  declarations: [
    AppComponent,
    BasComponent,
    AdresListComponent,
    AdresCreateComponent,
    AdresUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
