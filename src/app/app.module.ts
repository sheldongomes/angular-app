import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductCardsComponent } from './product-cards/product-cards.component';
import { DemoMaterialModule } from './product-cards/material-module';
import { RouterModule } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AboutComponent } from './about/about.component';
import { CellPhonesComponent } from './cell-phones/cell-phones.component';
import { ComputersComponent } from './computers/computers.component';
import { WatchesComponent } from './watches/watches.component';
import { TabletsComponent } from './tablets/tablets.component';
import { AlertsComponent } from './alerts/alerts.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardsComponent,
    TopBarComponent,
    AboutComponent,
    CellPhonesComponent,
    ComputersComponent,
    WatchesComponent,
    AlertsComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    RouterModule.forRoot([
      { path: '', component: ProductCardsComponent},
      { path: 'about', component: AboutComponent},
      { path: 'cell-phones', component: CellPhonesComponent},
      { path: 'computers', component: ComputersComponent},
      { path: 'watches', component: WatchesComponent},
      { path: 'tablets', component: TabletsComponent}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
