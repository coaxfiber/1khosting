import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { PreenrollmentComponent } from './preenrollment/preenrollment.component';
import { GlobalService } from './global.service';
import { HttpModule } from '@angular/http';
import { StorageServiceModule } from 'angular-webstorage-service';
import { PersonInformationComponent } from './general/person-information/person-information.component';
import { UpdatePersonComponent } from './general/update-person/update-person.component';
import { ParticlesModule } from 'angular-particle';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    HomeComponent,
    PreenrollmentComponent,
    PersonInformationComponent,
    UpdatePersonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpModule,StorageServiceModule,
    ParticlesModule
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
