import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'projects/ngx-img-slider/src/lib/ngx-img-slider.component';
import { HeroService } from "./hero.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild('nav', { static: false }) ds: NgImageSliderComponent;
    title = 'Ng Image Slider';
    showSlider = true;

    sliderWidth: Number = 940;
    sliderImageWidth: Number = 250;
    sliderImageHeight: Number = 200;
    sliderArrowShow: boolean = true;
    sliderInfinite: boolean = false;
    sliderImagePopup: boolean = true;
    sliderAutoSlide: boolean = false;
    sliderSlideImage: Number = 1;
    sliderAnimationSpeed: any = 1;
    imageObject;
    slideOrderType: string = 'DESC';

    constructor(private heroService: HeroService) {
        this.setImageObject();
    }

    onChangeHandler() {
        this.setImageObject();
        this.showSlider = false;
        setTimeout(() => {
            this.showSlider = true;
        }, 10);
    }

    setImageObject() {
        // this.heroService.getImages().subscribe((data: any) => {
        // setTimeout(() => {
        //     this.imageObject = data;
        // }, 3000);
        // });
        this.imageObject = this.heroService.getImagesWithOrder();
    }

    imageOnClick(index) {
        console.log('index', index);
    }

    lightboxClose() {
        console.log('lightbox close')
    }

    arrowOnClick(event) {
        console.log('arrow click event', event);
    }

    lightboxArrowClick(event) {
        console.log('popup arrow click', event);
    }

    prevImageClick() {
        this.ds.prev();
    }

    nextImageClick() {
        this.ds.next();
    }
}
