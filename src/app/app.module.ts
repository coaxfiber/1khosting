import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { GlobalService } from './global.service';
import { HttpModule } from '@angular/http';
import { StorageServiceModule } from 'angular-webstorage-service';
import { ParticlesModule } from 'angular-particle';
import {
    SocialLoginModule,
    AuthServiceConfig,
    GoogleLoginProvider,
} from "angular-6-social-login";
import { BillingComponent } from './hosting/billing/billing.component';
import { SslComponent } from './hosting/ssl/ssl.component';

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("489382374391-u6bb9r1b9shkai2pumprqvkvsoh31kom.apps.googleusercontent.com")
        }
      ]
  )
  return config;
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    HomeComponent,
    BillingComponent,
    SslComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpModule,StorageServiceModule,
    ParticlesModule,SocialLoginModule
  ],
  providers: [GlobalService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
