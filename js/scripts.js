$( document ).ready(function() {
    miVideo.addEventListener("timeupdate", function(){
        if(this.currentTime >= 35) {
            this.pause();
        }
    });
});