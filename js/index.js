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
    const gallerySlider = document.getElementsByClassName('gallery-slider')[0];
    new Splide( gallerySlider, {
      type       : 'loop',
      perPage    : 1,
      perMove    : 1,
     
    
    }).mount(window.splide.Extensions );
  
    const video = new VideoPlayer('.intro-video');
})

function makingNavWork(){
  const links = document.querySelectorAll('.nav-items-wrapper a');
  links.forEach((e)=>{
    e.addEventListener('click',()=>{
      const linkName = e.getAttribute('link');
      window.scrollTo(0, document.getElementById(linkName.substring(1)).offsetTop-70);    
    })
  })
}
makingNavWork();