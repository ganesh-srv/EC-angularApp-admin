import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CrmGlimpseModule} from '../app/crm-glimpse/crm-glimpse.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SignInModule} from './sign-in/sign-in.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import { WidgetsComponent } from './widgets/widgets.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CrmGlimpseModule,
    SignInModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
