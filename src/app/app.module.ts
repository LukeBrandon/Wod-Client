import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

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
import { UserScoreComponent } from './white-board-page/user-score/user-score.component';
import { OwnerPageComponent } from './owner-page/owner-page.component';
import { AddWodComponent } from './owner-page/add-wod/add-wod.component';
import { ChangeMembershipComponent } from './owner-page/change-membership/change-membership.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    NavComponent,
    ClassBoardPageComponent,
    WhiteBoardPageComponent,
    SettingsPageComponent,
    WodPageComponent,
    UserScoreComponent,
    OwnerPageComponent,
    AddWodComponent,
    ChangeMembershipComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
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
