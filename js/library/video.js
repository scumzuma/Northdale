export class VideoPlayer {
    constructor(selector){
       this.wrapper = document.querySelector(selector);
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
        this.video.play();
    }
    pause(){
        this.video.pause();
    }
}