import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { DashboardsComponent } from './pages/dashboards/dashboards.component';
import { LocadoresComponent } from './pages/locadores/locadores.component';
import { ResetSenhaComponent } from './pages/reset-senha/reset-senha.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'Login',
    pathMatch: 'full' 
  },
  {
    path: 'Login',
    component: LoginComponent
  },
  {
    path: 'ResetPassword',
    component: ResetSenhaComponent
  },
  {
    path: 'Home',
    component: MainComponent,
    canActivateChild: [AuthGuard],
    data: { title: 'Secure Views', breadcrumb: 'Home' },
    children: [
      {
        path: 'Dashboard',
        component: DashboardsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'Locadores',
        component: LocadoresComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
