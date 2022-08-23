const video=document.getElementById('video');
const play=document.getElementById('play');
const stop=document.getElementById('stop');
const progress=document.getElementById('progress');
const timestamp=document.getElementById('timestamp');

//toggle video status 
function toggleVideoStatus(){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}

//play the video
function updatePlayIcon(){
    if(video.paused){
       play.innerHTML='<i class="fa fa-play fa-2x"></i>';
    }else{
        play.innerHTML='<i class="fa fa-pause fa-2x"></i>';
    }
}

//stop video
function stopVideo(){
  video.currentTime=0;
  video.pause();
}

//update progress

function udpateProgress(){
 progress.value = (video.currentTime/video.duration)* 100;

 let minutes= Math.floor(video.currentTime / 60);
 minutes=minutes.toString().padStart(2,'0');
 
 let seconds= Math.floor(video.currentTime % 60);
 seconds=seconds.toString().padStart(2,'0');

 timestamp.innerHTML= `${minutes}:${seconds}`;
 

}

//set video time to progress
function setVideoProgress(){
    video.currentTime = (progress.value*video.duration)/100;
}


//Event Listeners

video.addEventListener('click',toggleVideoStatus);
video.addEventListener('timeupdate',udpateProgress);
video.addEventListener('play',updatePlayIcon);
video.addEventListener('pause',updatePlayIcon);
play.addEventListener('click',toggleVideoStatus);
stop.addEventListener('click',stopVideo);
progress.addEventListener('change',setVideoProgress);
