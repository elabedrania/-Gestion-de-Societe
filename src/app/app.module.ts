import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './dashboard/layout/header/header.component';
import { SidebarComponent } from './dashboard/layout/sidebar/sidebar.component';
import { FooterComponent } from './dashboard/layout/footer/footer.component';
import { GestionclientComponent } from './dashboard/gestionclient/gestionclient.component';
import { GestiondepartementComponent } from './dashboard/gestiondepartement/gestiondepartement.component';
import { GestionemployeComponent } from './dashboard/gestionemploye/gestionemploye.component';
import { AjoutdepComponent } from './dashboard/gestiondepartement/ajoutdep/ajoutdep.component';

import { UpdatedepComponent } from './dashboard/gestiondepartement/updatedep/updatedep.component';
import { ListdepComponent } from './dashboard/gestiondepartement/listdep/listdep.component';
import { AjoutclientComponent } from './dashboard/gestionclient/ajoutclient/ajoutclient.component';
import { ListclientComponent } from './dashboard/gestionclient/listclient/listclient.component';
import { UpdateclientComponent } from './dashboard/gestionclient/updateclient/updateclient.component';
import { UpdateempComponent } from './dashboard/gestionemploye/updateemp/updateemp.component';
import { ListempComponent } from './dashboard/gestionemploye/listemp/listemp.component';
import { AjoutempComponent } from './dashboard/gestionemploye/ajoutemp/ajoutemp.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    GestionclientComponent,
    GestiondepartementComponent,
    GestionemployeComponent,
    AjoutdepComponent,
    
    UpdatedepComponent,
    ListdepComponent,
    AjoutclientComponent,
    ListclientComponent,
    UpdateclientComponent,
    UpdateempComponent,
    ListempComponent,
    AjoutempComponent
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
