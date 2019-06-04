const filter = () => {

  let buttonBlock = document.querySelector('.portfolio-menu'),
    buttons = document.querySelectorAll('.portfolio-menu li'),
    all = document.querySelectorAll('.portfolio-block.all'),
    girl = document.querySelectorAll('.portfolio-block.girl'),
    lovers = document.querySelectorAll('.portfolio-block.lovers'),
    guy = document.querySelectorAll('.portfolio-block.guy'),
    chef = document.querySelectorAll('.portfolio-block.chef'),
    noPortf = document.querySelectorAll('.portfolio-no');


  const bindContent = (a, portfBlock, targetArg) => {
    
    for (let i = 0; i < noPortf.length; i++) {
      noPortf[i].style.display = 'none';
    }

    for (let i = a; i < buttons.length; i++) {
      buttons[i].classList.remove('active');
    }
    
    if (targetArg) {
      targetArg.classList.add('active');
    }
    
    for (let i = 0; i < all.length; i++) {
      all[i].style.display = 'none';
    }
    
    if (portfBlock) {
      for (let i = 0; i < portfBlock.length; i++) {
        portfBlock[i].style.display = 'block';
      }
    }
    
  };

  bindContent(1, all);


  buttonBlock.addEventListener('click', e => {

    let target = e.target;

    if (target && target.classList.contains('all')) {
      bindContent(0, all, target);
    }
    if (target && target.classList.contains('lovers')) {
      bindContent(0, lovers, target);
    }
    if (target && target.classList.contains('girl')) {
      bindContent(0, girl, target);
    }
    if (target && target.classList.contains('guy')) {
      bindContent(0, guy, target);
    }
    if (target && target.classList.contains('chef')) {
      bindContent(0, chef, target);
    }
    if (target && target.classList.contains('grandmother')) {
      bindContent(0, noPortf, target);
    }
    if (target && target.classList.contains('granddad')) {
      bindContent(0, noPortf, target);

    }
  });

};

module.exports = filter;