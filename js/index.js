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

function toogleDialog(){
  const dialogBox = document.getElementById('dialog-box');
  dialogBox.classList.toggle('active');
}
function makeToggleformwork(){
const dialogclose = document.getElementsByClassName('close-dialog-button')[0];
const dialogBox = document.getElementById('dialog-box');
dialogclose.addEventListener('click',()=>{
  dialogBox.classList.toggle('active');
})
const buttons = Array.from(document.getElementsByClassName('open-enquire-form'));
buttons.forEach((ele)=>{
  ele.addEventListener('click',()=>{
    toogleDialog();
  })
})
}
makeToggleformwork();

function imageZoom(){
  const images = Array.from(document.getElementsByClassName('image-zoom'));
      const imageDialogCon= document.querySelector('.image-dialog');
function showImageDialog(src){
    const imageDialog = document.querySelector('.image-dialog img');
    imageDialogCon.classList.toggle('active');
    imageDialog.setAttribute('src',src);
  }
  const closeImageDialogButton = document.getElementsByClassName('close-image-dialog-button')[0];
  closeImageDialogButton.addEventListener('click',()=>{
    imageDialogCon.classList.toggle('active');
  })
  images.forEach(ele=>{
    ele.addEventListener('click',()=>{
      showImageDialog(ele.getAttribute('src'));
    })
  })
  
}
imageZoom();

function imageDialog(){
  const imagesSrcs = Array.from( document.getElementsByClassName('image-zoom')).map(ele=>{
    return ele.getAttribute('src');
  })
  const nextButton = document.querySelector('.next-image-dialog');
  const prevButton = document.querySelector('.prev-image-dialog');

  const imageDialog = document.querySelector('.image-dialog img');

  function currentImgSrcIndex(){
    const index = imagesSrcs.indexOf(imageDialog.getAttribute('src'));
    console.log('current index',index);
      return index;
  }
  function switchImgTo(index){
    if(imagesSrcs[index]){
      console.log('called');
      imageDialog.setAttribute('src',imagesSrcs[index]);

    }
  }
  nextButton.addEventListener('click',()=>{
    let currentIndex = currentImgSrcIndex();
    switchImgTo(++currentIndex)
    console.log('new',currentIndex)
  })
  prevButton.addEventListener('click',()=>{
    let currentIndex = currentImgSrcIndex();
    switchImgTo(--currentIndex)})
}
imageDialog();