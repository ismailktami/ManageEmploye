import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes} from '@angular/router';
import { FormsModule} from '@angular/forms';

import {FlashMessagesModule} from 'angular2-flash-messages';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeInfoComponent } from './components/employee-info/employee-info.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { EmployeesComponent } from './components/employees/employees.component';
import{ EmployeeService } from './services/employee.service';
import { AuthGuard } from './guards/auth.guard';
import {AuthService} from './services/auth.service';
import { SettingsService } from './services/settings.service';
import { RegisterGuard} from './guards/register.guard';

export const firebaseConfig = {
  apiKey: 'AIzaSyAAJm4sTPhna0iWBY5-DjidKNvojTOT9DI',
  authDomain: 'employemanagement-7fd86.firebaseapp.com',
  databaseURL: 'https://employemanagement-7fd86.firebaseio.com',
  projectId: 'employemanagement-7fd86',
  storageBucket: 'employemanagement-7fd86.appspot.com',
  messagingSenderId: '757497469270'
};


const appRoutes: Routes=[
  {path:'',component:DashboardComponent , canActivate:[AuthGuard]},
  {path:'register',component:RegisterComponent , canActivate:[RegisterGuard]},
  {path:'add-employee',component:AddEmployeeComponent , canActivate:[AuthGuard]},
  {path:'employee/:id',component:EmployeeInfoComponent, canActivate:[AuthGuard]},
  {path:'edit-employee/:id',component:EditEmployeeComponent, canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'settings',component:SettingsComponent , canActivate:[AuthGuard]},
  {path:'**',component:PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EmployeeInfoComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [
    AngularFireAuth,
    AuthService,
    AngularFireDatabase,
    AuthGuard,
    SettingsService,
    RegisterGuard,
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
