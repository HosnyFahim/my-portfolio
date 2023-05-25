import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { ConctactComponent } from './conctact/conctact.component';
import { ImprintComponent } from './imprint/imprint.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutMeComponent,
    SkillsComponent,
    MyWorkComponent,
    ConctactComponent,
    ImprintComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
