'use strict';

(function() {

  const elemBg = document.querySelector('.background-image-container');
  const elemForm = document.querySelector('.login-form-wrapper');

  const imagesSrc = [
    "url('img/bg1.jpg')",
    "url('img/bg2.jpg')",
    "url('img/bg3.jpg')"
  ];

  // last active background image
  let previousImage = null;

  // first load
  setImageUrl();
  window.onload = showAnimation;


  // change background image each n hours
  let timerIntervalId = setInterval(() => {
    hideAnimationBg();

    // delay until the animation is hidden
    setTimeout(() => {
      setImageUrl();
      showAnimation();
    }, 1400);

  }, 1000 * 60 * 60 * 8); // 8 hours


  function setImageUrl() {
    let randomImage = null;

    while(!randomImage) {
      randomImage = getRandomArrayItem(imagesSrc);

      // one more chance to create another image
      if (randomImage === previousImage) {
        randomImage = null;
        continue;
      }

      previousImage = randomImage;
    }

    elemBg.style.backgroundImage = randomImage;
  }

  function getRandomArrayItem(arr) {
    let arrayItem = Math.floor(Math.random() * arr.length);
    return arr[arrayItem];
  };

  function showAnimation() {
    elemForm.classList.add('animated');
    elemBg.classList.add('animated');
  }

  function hideAnimationBg() {
    elemBg.classList.remove('animated');
  }

})();