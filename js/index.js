import {VideoPlayer} from './library/video.js';
document.addEventListener( 'DOMContentLoaded', ()=>{
    const layoutSlider = document.getElementsByClassName('layout-slider')[0];
     new Splide( layoutSlider, {
        autoWidth: true,
        type    : 'loop',
        arrows:false,
        autoplay: true,
    }).mount();
      
    const locationSlider = document.getElementsByClassName('location-slider')[0];
    new Splide( locationSlider, {
        type    : 'loop',        
        autoplay: true,
        arrows:false,
    }).mount();

    const hightlightSlider = document.getElementsByClassName('hightlight-slider')[0];
    new Splide( hightlightSlider, {
        type    : 'loop',        
        autoplay: true,
    }).mount();

    const ammenitiesSlider = document.getElementsByClassName('ammenities-slider')[0];
    new Splide(ammenitiesSlider, {
        type   : 'loop',
        autoplay:true,
        perPage: 2,
        padding: '3rem',
    }).mount();
    const video = new VideoPlayer('.intro-video');
})

