const accordion = () => {
  //пишем табы
  // let tab = document.querySelectorAll('.accordion-heading'),
  let tab = document.querySelectorAll('.accordion-heading > span'),
      tabContent = document.querySelectorAll('.accordion-block');


  const hideTabContent = (a) => {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('ui-accordion-header-active', 'animated', 'fadeInDown', 'slower');
      tabContent[i].style.display = 'none';
      // tab[i].style.color = 'black';
      // tab[i].style.borderBottom = '2px dotted #333';
      tab[i].style.cssText = `color: black; \
        border-bottom: 2px dotted #333; \
        font-size: 2.2rem; \
        `;





      // tabContent[i].classList.remove('show');
      // tabContent[i].classList.add('hide');
    }
  };
  hideTabContent(0);

  const showTabContent = (b) => {
    // if (tabContent[b].classList.contains('hide')) {
      // tabContent[b].classList.remove('hide');
      tabContent[b].style.display = 'block';
      tabContent[b].classList.add('ui-accordion-header-active', 'animated', 'fadeInDown', 'slower');

      // tab[b].style.color = '#c51abb';
      // tab[b].style.border = 'none';
        tab[b].style.cssText = `color: #c51abb; \
        border-bottom: none; \
        font-size: 3rem; \
        `;
      
    // }
  };

  // Уже во втором блоке встречаюсь с проблемой, что если получаю event.target по клику и проверяю по classList.contains, то при клике на родителя событие
  // срабатывает, а при клике потомков ничего не происходит, что я уже не делал(в том числе менял z-index), не понимаю в чем дело... кто-нибудь с таким 
  // сталкивался?

  document.body.addEventListener('click', e => {

    let target = e.target;
    
    if (target.classList.contains('tab-head')) {
      
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });
};

module.exports = accordion;