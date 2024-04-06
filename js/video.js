var video = document.querySelector("video");

function updateVol() {
	let vol = document.querySelector("#volume");
	vol.innerHTML = video.volume*100 + "%";
}

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("play");
	video.play();
	updateVol();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("pause");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
    video.playbackRate = (video.playbackRate * 0.9);
    console.log("new speed: ", video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
    video.playbackRate = (video.playbackRate / 0.9);
    console.log("new speed: ", video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 10 > video.duration) {
        video.currentTime = 0;
    } else {
        video.currentTime += 10;
    }
    console.log("current location: ", video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (!video.muted) {
		video.muted = true;
		this.innerHTML = "Unmute";
	} else {
		video.muted = false;
		this.innerHTML = "Mute";
	}
});

document.querySelector("#slider").addEventListener("input", function() {
    video.volume = this.value / 100;
    updateVol();
});

document.querySelector("#vintage").addEventListener("click", function() {
    video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
    video.classList.remove("oldSchool");
});