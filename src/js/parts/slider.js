const slider = () => {

  let slideIndex = 1,
      btnNext = document.querySelector('.main-slider-btn.main-next-btn img'),
      btnPrev = document.querySelector('.main-slider-btn.main-prev-btn img'),
      stopSlider = document.querySelector('.feedback-slider'),
      slides = document.querySelectorAll('.feedback-slider-item');

  showSlides(slideIndex);

  let timer = null,
      autoplay = setTimeout( function play() {
        plusSlides(1);
        timer = setTimeout(play, 7000);
      });
  
  stopSlider.addEventListener('click', () => {
    if (timer) {
      console.log("остановлен");   
      clearTimeout(timer);
      timer = null;
    } 
  });
  
  stopSlider.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    if (!timer) {
      console.log('запущен');
      autoplay = setTimeout(function play() {
        plusSlides(1);
        timer = setTimeout(play, 7000);
      });
    }
  });

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach(item => item.style.display = 'none'); 
    slides[slideIndex - 1].classList.add('animated', 'fadeInRight');
    slides[slideIndex - 1].style.display = 'block';
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  document.body.addEventListener('click', e => {

    let target = e.target;

    if (target == btnPrev) {
      plusSlides(-1);
      slides[slideIndex - 1].classList.remove('fadeInRight');
      slides[slideIndex - 1].classList.add('fadeInLeft');
    }
    
    if (target == btnNext) {
      slides[slideIndex - 1].classList.remove('fadeInLeft');
      plusSlides(1);
    }

  });

};

module.exports = slider;