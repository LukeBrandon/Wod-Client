import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ClassBoardPageComponent } from './class-board-page/class-board-page.component';
import { WhiteBoardPageComponent } from './white-board-page/white-board-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { WodPageComponent } from './wod-page/wod-page.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'homeScreen', component: HomePageComponent },
  { path: 'classBoard', component: ClassBoardPageComponent },
  { path: 'whiteBoard', component: WhiteBoardPageComponent },
  { path: 'settings', component: SettingsPageComponent },
  { path: 'wod', component: WodPageComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
