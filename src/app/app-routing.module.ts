import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthGuard } from './auth.guard';
import { CrmGlimpseComponent } from './crm-glimpse/crm-glimpse.component';


const routes: Routes = [

  {
    path: 'login',
    component: SignInComponent
  },
  {
    path: 'Crm-Glimpse',
    component: CrmGlimpseComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'widget',
    loadChildren: './widgets/widgets.module#WidgetsModule'
    // canActivate: [AuthGuard, MeasuresGuard]
  },
  {
    path: '**',
    redirectTo: 'login' // Redirect to signin page when no specific path in url
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
