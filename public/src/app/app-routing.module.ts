import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StandardComponent } from './standard/standard.component';
import { ClassComponent } from './class/class.component';
import { AppComponent } from './app.component';
import { ShamanComponent } from './shaman/shaman.component';
import { NeutralComponent } from './neutral/neutral.component';
import { WildComponent } from './wild/wild.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {path: 'home', component:HomeComponent},
  {path: 'standard', component:StandardComponent},
  {path:'neutral', component:NeutralComponent},
  {path: 'classes', component:ClassComponent},
  {path:'Shaman', component:ShamanComponent},
  {path: 'Priest', component:ShamanComponent},
  { path: 'Druid', component: ShamanComponent},
  { path: 'Mage', component: ShamanComponent},
  { path: 'Hunter', component: ShamanComponent},
  { path: 'Warlock', component: ShamanComponent},
  { path: 'Warrior', component: ShamanComponent},
  { path: 'Paladin', component: ShamanComponent},
  {path:'wild/classes', component:WildComponent},
  {path:'profile/:id', component:ProfileComponent},
  {path:'login', component:LoginComponent},
  {path:'', pathMatch:'full', redirectTo:'/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
