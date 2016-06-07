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
      setTimeout(function() {
          disableRightButton();
          disableLeftButton();
      }, 1000, false);
  });
  slideRightBtn.addEventListener('click', function(){
      slideRight();
      setTimeout(function() {
          disableRightButton();
          disableLeftButton();
      }, 1000, false);
  });

  function slideLeft() {
    for (var i = 0; i < slideItems.length; i++) {
        var item = slideItems[i];
        var offset = parseInt(item.style.left, 10);
        var offsetUpdate = offset + sliderWidth;
        moveLeft(item, offset, offsetUpdate);
    }
  }

  function slideRight() {
      for (var i = 0; i < slideItems.length; i++) {
          var item = slideItems[i];
          var offset = parseInt(item.style.left, 10);
          var offsetUpdate = offset - sliderWidth;
          moveRight(item, offset, offsetUpdate);
      }
  }


  // Animate scroll

  function moveLeft(elem, offset, offsetUpdate) {
      var left = offset;
      var goal = offsetUpdate;
      function frame() {
          left += 20;
          elem.style.left=left + 'px';
          if (left < goal) {
              window.requestAnimationFrame(frame);
          }
      }
      window.requestAnimationFrame(frame);
  }

  function moveRight(elem, offset, offsetUpdate) {
      var left = offset;
      var goal = offsetUpdate;

      function frame() {
          left -= 20;
          elem.style.left=left + 'px';
          if (left > goal) {
              window.requestAnimationFrame(frame);
          }
      }
      window.requestAnimationFrame(frame);
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
