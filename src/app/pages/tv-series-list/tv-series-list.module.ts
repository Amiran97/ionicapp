import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TvSeriesListPageRoutingModule } from './tv-series-list-routing.module';

import { TvSeriesListPage } from './tv-series-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TvSeriesListPageRoutingModule
  ],
  declarations: [TvSeriesListPage]
})
export class TvSeriesListPageModule {}
