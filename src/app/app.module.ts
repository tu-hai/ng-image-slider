import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgImageSliderModule } from 'ngx-img-slider';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { HeroService } from "./hero.service";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        NgImageSliderModule
    ],
    providers: [HeroService],
    bootstrap: [AppComponent]
})
export class AppModule { }
