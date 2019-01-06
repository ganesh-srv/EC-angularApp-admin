import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
@NgModule({
    imports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
      RouterModule.forChild([
        { path: '', component: SignInComponent, pathMatch: 'full' }
      ]),
    ],
    declarations: [SignInComponent],
    exports: [SignInComponent]
  })
  export class SignInModule {}
