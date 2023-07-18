interface VideoPlayerElements {
  videoPlayer: HTMLVideoElement;
  playButton: HTMLButtonElement;
  stopButton: HTMLButtonElement;
}

interface VideoPlayerProtocol {
  playToggle(): void;
  stop(): void;
  iniciarEventos(): void;
}

export default class VideoPlayer implements VideoPlayerProtocol {
  private videoPlayer: HTMLVideoElement;
  private playButton: HTMLButtonElement;
  private stopButton: HTMLButtonElement;

  constructor(videoPlayerElements: VideoPlayerElements) {
    this.videoPlayer = videoPlayerElements.videoPlayer;
    this.playButton = videoPlayerElements.playButton;
    this.stopButton = videoPlayerElements.stopButton;
  }

  iniciarEventos(): void {
    this.playButton.addEventListener(`click`, () => {
      this.playToggle();
    });
    this.stopButton.addEventListener(`click`, () => {
      this.stop();
    });
  }

  playToggle(): void {
    if (this.videoPlayer.paused) {
      this.playButton.textContent = `Pause`;
      this.videoPlayer.play();
    } else {
      this.playButton.textContent = `Play`;
      this.videoPlayer.pause();
    }
  }

  stop(): void {
    this.playButton.textContent = `Play`;
    this.videoPlayer.pause();
    this.videoPlayer.currentTime = 0;
  }
}

const videoPlayer = new VideoPlayer({
  videoPlayer: document.querySelector('.video') as HTMLVideoElement,
  playButton: document.querySelector(`.play`) as HTMLButtonElement,
  stopButton: document.querySelector(`.stop`) as HTMLButtonElement,
});

videoPlayer.iniciarEventos();
