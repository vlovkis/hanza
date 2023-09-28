import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardListComponent } from './components/dashboard-list/dashboard-list.component';
import { DashboardDetailComponent } from './components/dashboard-detail/dashboard-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PowerBIEmbedModule } from 'powerbi-client-angular';
import { MaterialModule } from './helpers/material/material.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './components/settings/settings.component';
import { PlasmaViewComponent } from './components/plasma-view/plasma-view.component';
import { EditViewComponent } from './components/edit-view/edit-view.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardListComponent,
    DashboardDetailComponent,
    SettingsComponent,
    PlasmaViewComponent,
    EditViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PowerBIEmbedModule,
    MaterialModule,
    FormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
