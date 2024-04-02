const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

yesBtn.addEventListener('click', () => {
    question.innerHTML = 'I Love You Too :)';
});

noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;

    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});

function playmusic() {
    ['leluuly'].forEach(function (audioName) {
      let fullPath = `audio/${audioName}.mp3`;
      let audioElement = document.createElement('audio');
      audioElement.setAttribute('src', fullPath);
      audioElement.style.display = 'none';
      audioElement.addEventListener('ended', function () {
        this.currentTime = 0;
        this.play();
      });
      audioElement.play();
    });
  }
  
  let nothing = true;
  
  document.addEventListener('click', function () {
      if (nothing) {
        nothing = false;
        playmusic();
      }
    });