import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from  '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { MyMaterialModule } from  './material.module';
import {ErrorComponent} from './error.component';
import {PasswordComponent} from './forgotpassword.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotfoundComponent } from './notfound/notfound.component';
import { HttpexampleComponent } from './httpexample/httpexample.component';
import {UserserviceService} from './userservice.service';
import { HttpClientModule } from '@angular/common/http';
import { SepipeexampleComponent } from './sepipeexample/sepipeexample.component';
import { SepipePipe } from './sepipe.pipe';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { TemplateformsComponent } from './templateforms/templateforms.component';

/**
 * ng generate c myComponent --module app 
 * 
 * beacause here want to add component in APP module !
 * 
 * Application can have multiple module so while creating component specify 
 *  
 */


//Add any path in Array for navigation in entire application
const  appRoutes:  Routes  = [
  
  { path:  'httpexample', component:  HttpexampleComponent },
  { path:  'customer-list', component:  CustomerListComponent },
  { path:  'customer-create', component:  CustomerCreateComponent },
  { path:  'templateform', component:  TemplateformsComponent},
  { path:  'reactiveform', component:  ReactiveformsComponent},
  {
  path:  'login',
  component:  LoginComponent
  },
  {
    path:  'pipeexample',
    component:  SepipeexampleComponent
  },
  { path:  '',
  
  redirectTo:  '/login',
  
  pathMatch:  'full'
  
  },
  {
    path:  '**',
    component:  NotfoundComponent
  },

  ];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomerListComponent,
    CustomerCreateComponent,
    ErrorComponent,
    PasswordComponent,
    NotfoundComponent,
    HttpexampleComponent,
    SepipeexampleComponent,
    SepipePipe,
    ReactiveformsComponent,
    TemplateformsComponent,
    ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MyMaterialModule,
    FormsModule, // For template driven form
    HttpClientModule ,// import to add for HTTP communication otherwise ERROR will be thrown!
    ReactiveFormsModule
  ],
  providers: [UserserviceService], // Add all service here if you want to expose in entire application
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent,PasswordComponent], // Material desing dialog
})
export class AppModule { }
