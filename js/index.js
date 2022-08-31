import {VideoPlayer} from './library/video.js';
/* // typical import
import gsap from "gsap";

// get other plugins:
import ScrollTrigger from "gsap/ScrollTrigger";
 */
document.addEventListener( 'DOMContentLoaded', ()=>{
   /*  setTimeout(() => {
      toogleDialog('Enquire Now');
    }, 10000); */
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
        breakpoints: {
          900: {
            perPage: 1,
            padding:'5rem'
          },
          786: {
            perPage: 1,
            padding:'0  '
          },
        }
    }).mount();
    const gallerySlider = document.getElementsByClassName('gallery-slider')[0];
    new Splide( gallerySlider, {
      type       : 'loop',
      perPage    : 1,
      perMove    : 1,
     
    
    }).mount();
  
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

function toogleDialog(buttonName){
  const dialogBox = document.getElementById('dialog-box');
  const button = document.getElementById('dialog-form-button');
  const head = document.getElementsByClassName('form-heading')[0];
  button.setAttribute('value',buttonName);
  head.innerHTML = buttonName;
  dialogBox.classList.toggle('active');
}
function makeToggleformwork(){
const dialogBox = document.getElementById('dialog-box');

const buttons = Array.from(document.getElementsByClassName('open-enquire-form'));
buttons.forEach((ele)=>{
  const buttonName = ele.getAttribute('data-button-name');
  ele.addEventListener('click',()=>{
    toogleDialog(buttonName);
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

function mobileNavBar(){
  const toggleButton  = document.getElementsByClassName('mobile-nav-toggle-button')[0];
  const navBar  = document.getElementsByClassName('mobile-nav-bar')[0];
  function toggleNavBar(){
    navBar.classList.toggle('active');
    toggleButton.classList.toggle('open');
  }
  toggleButton.addEventListener('click',toggleNavBar);

}
mobileNavBar();
function playVideo(){
  new VideoPlayer('.intro-video');
  new VideoPlayer('.ammenitie-video');
}
playVideo();/* 
function animateFrom(elem, direction) {
  direction = direction || 1;
  var x = 0,
      y = direction * 100;
  if(elem.classList.contains("gs_reveal_fromLeft")) {
    x = -100;
    y = 0;
  } else if (elem.classList.contains("gs_reveal_fromRight")) {
    x = 100;
    y = 0;
  }
  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";
  gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
    duration: 1.25, 
    x: 0,
    y: 0, 
    autoAlpha: 1, 
    ease: "expo", 
    overwrite: "auto"
  });
}
function hide(elem) {
  gsap.set(elem, {autoAlpha: 0});
}
console.log(window.ScrollTrigger);
document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);
  
  gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
    hide(elem); // assure that the element is hidden when scrolled into view
    
    ScrollTrigger.create({
      trigger: elem,
      onEnter: function() { animateFrom(elem) }, 
      onEnterBack: function() { animateFrom(elem, -1) },
      onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
    });
  });
});
 */