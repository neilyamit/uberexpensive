
window.onload = function() {
  "use strict";

  var sliderWidth = getSliderWidth();
  function getSliderWidth() {
      var w = document.querySelector('.slide-wrap').clientWidth;
      return w;
  }

  var slideItems = document.querySelectorAll('.slide-item');
  function sliderOffset() {
    for (var i = 0; i < slideItems.length; i++) {
      var offset = i * sliderWidth;
      console.log(offset);
      slideItems[i].style.left=offset;
    }
  }
  sliderOffset();

  var slideLeftBtn = document.getElementById('slide-left');
  var slideRightBtn = document.getElementById('slide-right');

  slideLeftBtn.addEventListener('click', slideLeft);
  slideRightBtn.addEventListener('click', slideRight);

  function slideLeft() {
    console.log("Clicked left");
  }

  function slideRight() {
    console.log("Clicked right");
  }
};
