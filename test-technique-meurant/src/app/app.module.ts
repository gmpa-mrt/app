import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import {FormsModule} from '@angular/forms';


import {UserService} from './services/user.service';
import { UserViewComponent } from './user-view/user-view.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SingleUserComponent } from './single-user/single-user.component';
import { CreateUserComponent } from './create-user/create-user.component';


import {RouterModule, Routes} from '@angular/router';



const appRoutes: Routes = [
  { path: 'user/:id', component: SingleUserComponent },
  { path: '', component: UserViewComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
];


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserViewComponent,
    NotFoundComponent,
    SingleUserComponent,
    CreateUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
