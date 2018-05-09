import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FiltersComponent } from './filters/filters.component';
import { AlertsComponent } from './alerts/alerts.component';
import { DetailsComponent } from './details/details.component';
import { AlertsService } from './services/alerts/alerts.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FiltersComponent,
    AlertsComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, CommonModule, FormsModule
  ],
  providers: [AlertsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
