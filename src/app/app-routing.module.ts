import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';


const routes: Routes = [

  {
    path: '',
    component: SignInComponent
  },
  {
    path: 'Crm-Glimpse',
    loadChildren: './crm-glimpse/crm-glimpse.module#CrmGlimpseModule'
    // canActivate: [AuthGuard, MeasuresGuard]
  },
  {
    path: 'widget',
    loadChildren: './widgets/widgets.module#WidgetsModule'
    // canActivate: [AuthGuard, MeasuresGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
