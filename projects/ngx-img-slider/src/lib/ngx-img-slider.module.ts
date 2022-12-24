import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgImageSliderComponent } from './ngx-img-slider.component';
import { SliderLightboxComponent } from './slider-lightbox/slider-lightbox.component';
import { NgImageSliderService } from './ngx-img-slider.service';
import { SliderCustomImageComponent } from './slider-custom-image/slider-custom-image.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        NgImageSliderComponent,
        SliderCustomImageComponent,
        SliderLightboxComponent
    ],
    providers: [
        NgImageSliderService
    ],
    exports: [NgImageSliderComponent]
})
export class NgImageSliderModule { }
