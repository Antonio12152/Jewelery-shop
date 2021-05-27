const video1 = document.getElementById("video1")
const video2 = document.getElementById("video2")
const videoPlay1 = document.getElementById("video__play1")
const videoPlay2 = document.getElementById("video__play2")


function playVideo(video, play) {
    video.play();
    play.style.display = "none"
}
function pauseVideo(video, play) {
    video.pause();
    play.style.display = "block"
}
videoPlay1.addEventListener("click", () => playVideo(video1,videoPlay1))
videoPlay2.addEventListener("click", () => playVideo(video2,videoPlay2))
video1.addEventListener("click",()=> pauseVideo(video1,videoPlay1))
video2.addEventListener("click",()=> pauseVideo(video2,videoPlay2))