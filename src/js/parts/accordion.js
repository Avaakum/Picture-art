const accordion = () => {

  let tab = document.querySelectorAll('.accordion-heading > span'),
      tabContent = document.querySelectorAll('.accordion-block');


  const hideTabContent = (a) => {

    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('ui-accordion-header-active', 'animated', 'fadeInDown', 'slower');
      tabContent[i].style.display = 'none';
      tab[i].style.cssText = `color: black; \
        border-bottom: 2px dotted #333; \
        font-size: 2.2rem; \
        `;
    }
  };

  hideTabContent(0);

  const showTabContent = (b) => {

    tabContent[b].style.display = 'block';
    tabContent[b].classList.add('ui-accordion-header-active', 'animated', 'fadeInDown', 'slower');
    tab[b].style.cssText = `color: #c51abb; \
      border-bottom: none; \
      font-size: 3rem; \
      `;
  };


  document.body.addEventListener('click', e => {

    let target = e.target;
    
    if (target.classList.contains('tab-head')) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          if (tabContent[i].classList.contains('ui-accordion-header-active')) {
             hideTabContent(0);
          } else {
            hideTabContent(0);
            showTabContent(i);
            break;
          }
        }
      }
    }
  });
};

module.exports = accordion;