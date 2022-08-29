
document.addEventListener( 'DOMContentLoaded', ()=>{
    const layoutSlider = document.getElementsByClassName('layout-slider')[0];
     new Splide( layoutSlider, {
        autoWidth: true,
        type    : 'loop',
        arrows:false,
        autoplay: true,
      } ).mount();
      
    const locationSlider = document.getElementsByClassName('location-slider')[0];
    new Splide( locationSlider, {
        type    : 'loop',        
        autoplay: true,
      } ).mount();
      
    
})
