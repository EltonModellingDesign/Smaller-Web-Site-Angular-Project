import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HistorieComponent } from './components/templates/main/routers/historie/historie.component';
import { SecurietyComponent } from './components/templates/main/routers/securiety/securiety.component';
import { PriceComponent } from './components/templates/main/routers/price/price.component';

const routes: Routes = [
  {path: '', component: HistorieComponent},
  {path: 'segurança', component: SecurietyComponent},
  {path: 'preço', component: PriceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
