const modal = () => {
  
  let overlayOrder = document.querySelector('.popup-design'),
      overlayConsult = document.querySelector('.popup-consultation'),
      overlayGift = document.querySelector('.popup-gift'),
      //избавились от всех лишних переменных, оставили только оверлей
      isActiveBtn; //об. проверочную переменную

  const bindModal = (overlay, overlayStatus, overflowStatus, elem) => {

    if (!elem) {
      elem = isActiveBtn;
    } 

    overlay.style.display = overlayStatus;
    document.body.style.overflow = overflowStatus;
  };


  


  document.body.addEventListener('click', e => {

    let target = e.target;

    if (target && target.classList.contains('button-design') ) {
      bindModal(overlayOrder, 'block', 'hidden', target);
    }

    if (target && target.classList.contains('button-consultation')) {
      bindModal(overlayConsult, 'block', 'hidden', target); 
    }

    if (target && target.classList.contains('fixed-gift')) {
      bindModal(overlayGift, 'block', 'hidden', target);
    }

    if (target && target.classList.contains('popup-close')) {
      bindModal(overlayOrder, 'none', '');
      bindModal(overlayConsult, 'none', '');
      bindModal(overlayGift, 'none', '');
    }
  });
};

module.exports = modal;