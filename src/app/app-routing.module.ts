import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardsGuard } from './guards/auth-guards.guard';
import { HomeComponent } from './views/home/home.component';
import { InscreverComponent } from './views/inscrever/inscrever.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuardsGuard],
    title: "Home | Collaborators"
  },
  {
    path: 'login',
    component: LoginComponent,
    title: "Login | Collaborators"
  },
  {
    path: 'inscrever-se',
    component: InscreverComponent,
    title: "Inscrever-se | Collaborators"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
