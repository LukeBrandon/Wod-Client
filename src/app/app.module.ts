import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonToggleModule,
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './home-page/home-page.component';
import { NavComponent } from './nav/nav.component';
import { ClassBoardPageComponent } from './class-board-page/class-board-page.component';
import { WhiteBoardPageComponent } from './white-board-page/white-board-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { WodPageComponent } from './wod-page/wod-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    NavComponent,
    ClassBoardPageComponent,
    WhiteBoardPageComponent,
    SettingsPageComponent,
    WodPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
