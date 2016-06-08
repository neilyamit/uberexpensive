window.onload = function() {
 "use strict";

 // Get current width of slider
  var sliderWidth;
  getSliderWidth();
  function getSliderWidth() {
      sliderWidth = document.querySelector('.slide-wrap').clientWidth;
      return sliderWidth;
  }

  // Recalculate on browser resize;
  window.addEventListener('resize', function() {
      var sliderWidth = getSliderWidth();
      sliderOffset(sliderWidth);
  });


  // Offset position of slider items
  var slideItems = document.querySelectorAll('.slide-item');
  function sliderOffset(width) {
    for (var i = 0; i < slideItems.length; i++) {
      var offset = i * width + 'px';
      slideItems[i].style.left=offset;
    }
  }
  sliderOffset(sliderWidth);

  var slideLeftBtn = document.getElementById('slide-left');
  var slideRightBtn = document.getElementById('slide-right');

  slideLeftBtn.addEventListener('click', function(){
      slideLeft();
      disableRightButton();
      disableLeftButton();
  });
  slideRightBtn.addEventListener('click', function(){
      slideRight();
      disableRightButton();
      disableLeftButton();
  });

  function slideLeft() {
    for (var i = 0; i < slideItems.length; i++) {
        var item = slideItems[i];
        var offset = parseInt(item.style.left, 10);
        var offsetUpdate = offset + sliderWidth;
        item.style.left=offsetUpdate + 'px';
    }
  }

  function slideRight() {
      for (var i = 0; i < slideItems.length; i++) {
          var item = slideItems[i];
          var offset = parseInt(item.style.left, 10);
          var offsetUpdate = offset - sliderWidth;
          item.style.left=offsetUpdate + 'px';
      }
  }

  // Disable buttons when no items left to scroll
  function disableLeftButton() {
      var pos = parseInt(document.querySelector('.slide-item:first-of-type').style.left, 10);
      if (pos >= 0) {
          slideLeftBtn.setAttribute('disabled', 'disabled');
      }
      else {
          slideLeftBtn.removeAttribute('disabled');
      }
  }

  function disableRightButton() {
      var pos = parseInt(document.querySelector('.slide-item:last-of-type').style.left, 10);
      if (pos === 0) {
          slideRightBtn.setAttribute('disabled', 'disabled');
      }
      else {
          slideRightBtn.removeAttribute('disabled');
      }
  }
};
