import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule , JsonpModule } from '@angular/http';

import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DetailsComponent } from './details/details.component';
import { BehanceService } from './services/behance.service';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routes
  ],
  providers: [BehanceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
