import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SandboxComponent } from './components/sandbox/sandbox.component';
import { FormsComponent } from './components/forms/forms.component';
import { GraphComponent } from './components/graph/graph.component';
import { HttpComponent } from './components/http/http.component';
import { DataService } from './services/data.service';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'user/:id', component: UserDetailsComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    SandboxComponent,
    FormsComponent,
    GraphComponent,
    HttpComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
