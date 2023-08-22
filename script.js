console.log("Welcome to Spotify");

//intialize the variables

let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("MyProgress");

let gif = document.getElementById("gif");
let songItem = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  { songName: "Company", filePath: "songs/1.mp3", coverPath: "" },
  { songName: "Daku", filePath: "songs/2.mp3", coverPath: "" },
  {
    songName: "Dil Galti kar Beitha Hai",
    filePath: "songs/3.mp3",
    coverPath: "",
  },
  {
    songName: "Kahani Suno",
    filePath: "songs/4.mp3.mp3",
    coverPath: "",
  },
  { songName: "Kya Loge Tum", filePath: "songs/5.mp3", coverPath: "" },
  {
    songName: "Let Me Down Slowly",
    filePath: "songs/6.mp3",
    coverPath: "",
  },
  { songName: "Maan Meri Jaan", filePath: "songs/7.mp3", coverPath: "" },
  {
    songName: "Dil De Bethi",
    filePath: "songs/8.mp3",
    coverPath: "",
  },
  {
    songName: "Tu Hai To Mujhe Kya Chahiye",
    filePath: "songs/9.mp3",
    coverPath: "",
  },
];

songItem.forEach((element, i) => {
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    playingname.innerText = songs[songIndex].songName;

    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause");
    masterPlay.classList.add("fa-play");
    gif.style.opacity = 0;
  }
});
audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});
myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});
const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause");
      element.classList.add("fa-play");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-play");
      e.target.classList.add("fa-pause");

      audioElement.src = `songs/${songIndex + 1}.mp3`;
      playingname.innerText = songs[songIndex].songName;

      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove("fa-play");
      masterPlay.classList.add("fa-pause");
    });
  }
);
document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 8) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  playingname.innerText = songs[songIndex].songName;

  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play");
  masterPlay.classList.add("fa-pause");
});
document.getElementById("previos").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  playingname.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play");
  masterPlay.classList.add("fa-pause");
});
