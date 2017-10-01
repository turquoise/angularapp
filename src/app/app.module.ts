import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SandboxComponent } from './components/sandbox/sandbox.component';
import { FormsComponent } from './components/forms/forms.component';
import { GraphComponent } from './components/graph/graph.component';
import { HttpComponent } from './components/http/http.component';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    SandboxComponent,
    FormsComponent,
    GraphComponent,
    HttpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
