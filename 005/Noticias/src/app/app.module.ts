import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { StyleSelectorComponent } from './components/style-selector/style-selector.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AddEntryComponent } from './components/add-entry/add-entry.component';
import { BlogEntryComponent } from './components/blog-entry/blog-entry.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StyleSelectorComponent,
    AdminComponent,
    AddEntryComponent,
    BlogEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
