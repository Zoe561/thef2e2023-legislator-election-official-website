import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingComponent } from './pages/loading/loading.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './feature/footer/footer.component';
import { HeaderComponent } from './feature/header/header.component';
import { ItemTitleComponent } from './feature/item-title/item-title.component';
import { EventBlockComponent } from './feature/event-block/event-block.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    ItemTitleComponent,
    EventBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
