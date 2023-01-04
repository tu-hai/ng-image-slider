import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { HeroService } from "./hero.service";
import { NgxImgSliderModule } from 'projects/ngx-img-slider/src/public_api';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        NgxImgSliderModule
    ],
    providers: [HeroService],
    bootstrap: [AppComponent]
})
export class AppModule { }
