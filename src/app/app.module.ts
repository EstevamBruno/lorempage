import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './navigation/about/about.component';
import { ServicesComponent } from './navigation/services/services.component';
import { PortfolioComponent } from './navigation/portfolio/portfolio.component';
import { ContactComponent } from './navigation/contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HoverMouseDirective } from './shared/hover-mouse/hover-mouse.directive';
import { HoverPhotoDirective } from './shared/hover-photo/hover-photo.directive';
import { ScrollTopBtnComponent } from './scroll/scroll-top-btn/scroll-top-btn.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HeaderComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent,
    HoverMouseDirective,
    HoverPhotoDirective,
    ScrollTopBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollToModule.forRoot()
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
