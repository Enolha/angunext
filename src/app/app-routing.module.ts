import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormConnexionComponent } from './form-connexion/form-connexion.component';
import { FormUtilisateurComponent } from './form-utilisateur/form-utilisateur.component';
import { MdpPerduComponent } from './mdp-perdu/mdp-perdu.component';


const routes: Routes = [
  {path: "inscription", component: FormUtilisateurComponent},
  {path:"connexion",component:FormConnexionComponent },
  {path:"mdpperdu",component:MdpPerduComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }