import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AjoutclientComponent } from './dashboard/gestionclient/ajoutclient/ajoutclient.component';
import { GestionclientComponent } from './dashboard/gestionclient/gestionclient.component';
import { ListclientComponent } from './dashboard/gestionclient/listclient/listclient.component';
import { UpdateclientComponent } from './dashboard/gestionclient/updateclient/updateclient.component';
import { AjoutdepComponent } from './dashboard/gestiondepartement/ajoutdep/ajoutdep.component';
import { GestiondepartementComponent } from './dashboard/gestiondepartement/gestiondepartement.component';
import { ListdepComponent } from './dashboard/gestiondepartement/listdep/listdep.component';
import { UpdatedepComponent } from './dashboard/gestiondepartement/updatedep/updatedep.component';
import { AjoutempComponent } from './dashboard/gestionemploye/ajoutemp/ajoutemp.component';
import { GestionemployeComponent } from './dashboard/gestionemploye/gestionemploye.component';
import { ListempComponent } from './dashboard/gestionemploye/listemp/listemp.component';
import { UpdateempComponent } from './dashboard/gestionemploye/updateemp/updateemp.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationGuard } from './services/authentication.guard';

const routes: Routes = [
  {path: '' , redirectTo: '/dashboard', pathMatch: 'full'},
  {path : 'login' , component : LoginComponent},
  {path: 'register', component : RegisterComponent},
  {path: 'dashboard', canActivate:[AuthenticationGuard] , component: DashboardComponent , children:[

    {path:'', redirectTo: 'gestiondepartement', pathMatch: 'full'},

    {path: 'gestionclient', component: GestionclientComponent , children:[
      {path: '', redirectTo: 'list', pathMatch:'full'},
      {path:'list', component: ListclientComponent },
      {path:'ajout', component: AjoutclientComponent},
      {path:'update/:id', component:UpdateclientComponent}
    ]},
    {path: 'gestionemploye', component: GestionemployeComponent , children:[
       {path: '', redirectTo: 'list', pathMatch:'full'},
       {path:'list', component: ListempComponent },
       {path:'ajout', component: AjoutempComponent},
       {path:'update/:id', component:UpdateempComponent}
    ]},
    {path: 'gestiondepartement', component: GestiondepartementComponent , children:[
      {path: '', redirectTo: 'list', pathMatch:'full'},
      {path:'list', component: ListdepComponent},
      {path:'ajout', component: AjoutdepComponent},
      {path:'update/:id', component:UpdatedepComponent}
    ]}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
