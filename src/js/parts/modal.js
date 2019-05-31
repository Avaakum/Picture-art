const modal = () => {
  //Модальное окно
  let overlayOrder = document.querySelector('.popup-design'),
      overlayConsult = document.querySelector('.popup-consultation'),
      overlayGift = document.querySelector('.popup-gift'),
      //избавились от всех лишних переменных, оставили только оверлей
      isActiveBtn; //об. проверочную переменную

  //делаем стрелочную ф-ю, будет открыв и закрыв модалку
  const bindModal = (overlay, overlayStatus, overflowStatus, classListMethod, elem) => {
    //последним аргументом делаем элемент, с которого мы будем удалять класс
    if (classListMethod == 'add') {
      isActiveBtn = elem;
    }
    if (!elem) {
      elem = isActiveBtn;
    } //во время вызова закрытия через крестик мы просто
    //не задаем 4й аргумент ф-ии, и соответственно берем с момента открытия модалки

    overlay.style.display = overlayStatus;

    // elem.classList[classListMethod]('more-splash'); //!!!!c квадратными скобками
    //в объект classList придет правильное значение (ОСТАВИМ ДЛЯ АНИМАЦИИ ОКНА)
    document.body.style.overflow = overflowStatus;
  };

  document.body.addEventListener('click', e => {
    //делаем один обрабочик событий на клики во всем боди,
    //при помощи условий будем отлавливать любое событие в любом месте
    let target = e.target;


    if (target && target.classList.contains('button-design') ) {
      bindModal(overlayOrder, 'block', 'hidden', 'add', target);
    }
    if (target && target.classList.contains('button-consultation')) {
      bindModal(overlayConsult, 'block', 'hidden', 'add', target);
      
    }
    if (target && target.classList.contains('fixed-gift')) {
      bindModal(overlayGift, 'block', 'hidden', 'add', target);
    }
    if (target && target.classList.contains('popup-close')) {
      bindModal(overlayOrder, 'none', '', 'remove');
      bindModal(overlayConsult, 'none', '', 'remove');
      bindModal(overlayGift, 'none', '', 'remove');
    }
  });
};

module.exports = modal;