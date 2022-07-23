import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/templates/header/header.component';
import { FooterComponent } from './components/templates/footer/footer.component';
import { MainComponent } from './components/templates/main/main.component';
import { HistorieComponent } from './components/templates/main/routers/historie/historie.component';
import { SecurietyComponent } from './components/templates/main/routers/securiety/securiety.component';
import { PriceComponent } from './components/templates/main/routers/price/price.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    HistorieComponent,
    SecurietyComponent,
    PriceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
