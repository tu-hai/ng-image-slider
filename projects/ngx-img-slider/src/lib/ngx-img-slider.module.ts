import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderCustomImageComponent } from './slider-custom-image/slider-custom-image.component';
import { SliderLightboxComponent } from './slider-lightbox/slider-lightbox.component';
import { NgImageSliderService } from './ngx-img-slider.service';
import { NgxImgSliderComponent } from './ngx-img-slider.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
      NgxImgSliderComponent,
        SliderCustomImageComponent,
        SliderLightboxComponent
    ],
    providers: [
        NgImageSliderService
    ],
    exports: [NgxImgSliderComponent]
})
export class NgxImgSliderModule { }
