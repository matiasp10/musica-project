let song = document.querySelector('.song');
let play = document.querySelector('.play-pause');

play.addEventListener('click', () => {
  if (song.paused) {
    song.play();
    play.src = 'src/pause.svg';
  } else {
    song.pause();
    play.src = 'src/play.svg';
  }
});
