export class VideoPlayer {
    constructor(selector){
       this.wrapper = document.querySelector(selector);
       this.wrapper.addEventListener('onmouseover',()=>{
        this.control.style.opacity = 0;
       })
       this.video = this.wrapper.querySelector('video');
       this.control = this.wrapper.querySelector('.controls-wrapper');
       this.control.addEventListener('click',()=>{
         const isPaused = this.video.paused;
         if(isPaused)
         this.play();
         else
         this.pause();
       })
    }
    play(){
        this.control.style.opacity = 0;
        this.video.play();
    }
    pause(){
        this.control.style.opacity = 1;
        this.video.pause();
    }
}