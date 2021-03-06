import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { AppService } from './app.service';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StandardComponent } from './standard/standard.component';
import { ClassComponent } from './class/class.component';
import { ShamanComponent } from './shaman/shaman.component';
import { WildComponent } from './wild/wild.component';
import { NeutralComponent } from './neutral/neutral.component';
import { DeckComponent } from './deck/deck.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [

    AppComponent,
    HomeComponent,
    StandardComponent,
    ClassComponent,
    ShamanComponent,
    WildComponent,
    NeutralComponent,
    DeckComponent,
    ProfileComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
