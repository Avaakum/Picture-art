/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/parts/accordion.js":
/*!***********************************!*\
  !*** ./src/js/parts/accordion.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./src/js/parts/calc.js":
/*!******************************!*\
  !*** ./src/js/parts/calc.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

let calc = () => {

  let selectBlock = document.querySelector('.select-block'),
      size = document.getElementById('size'),
      material = document.getElementById('material'),
      services = document.getElementById('options'),
      promo = document.querySelector('.promocode'),
      totalValue = document.querySelector('.calc-price'),
      sizeSum = 0,
      materialSum = 0,
      servicesSum = 0,
      total = 0;

  selectBlock.addEventListener('input', function () {
    sizeSum = size.options[size.selectedIndex].value;
    materialSum = material.options[material.selectedIndex].value;
    servicesSum = +services.options[services.selectedIndex].value;
    total = sizeSum * materialSum;

    if (sizeSum == 0 || materialSum == 0) {
      totalValue.innerHTML = "Для расчета нужно выбрать размер картины и материал картины";
    } else if (sizeSum != 0 && materialSum != 0 && promo.value == "IWANTPOPART") {
      console.log(1);
      let a = +total;
      totalValue.innerHTML = "Стоимость картины: " + (a + servicesSum)*0.7 + 'руб';
    } else {
      let a = +total;
      totalValue.innerHTML = "Стоимость картины: " + (a + servicesSum) + 'руб';
    }
  });

};

module.exports = calc;

/***/ }),

/***/ "./src/js/parts/filter.js":
/*!********************************!*\
  !*** ./src/js/parts/filter.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./src/js/parts/form.js":
/*!******************************!*\
  !*** ./src/js/parts/form.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

const form = () => {

    let globalSendForm = (popupCont, classModalBlock) => {

        let statusMessge = document.createElement('div'),
            statusImg = document.createElement('img'),
            popup = document.querySelectorAll(popupCont);
    
        const sendForm = (elem) => {
    
            elem.appendChild(statusMessge);
    
            let promise = new Promise((resolve, reject) => {
    
                let request = new XMLHttpRequest();
    
                request.open('POST', '../src/server.php');
                request.setRequestHeader('Contetnt-type', 'application/json; charset=utf-8');
    
                let formData = new FormData(elem),
                    obj = {};
    
                formData.forEach((value, key) => {
                    obj[key] = value;
                });
    
                let json = JSON.stringify(obj);
                request.send(json);
    
                request.addEventListener('readystatechange', () => {
                    if (request.readyState < 4) {
                        statusMessge.innerHTML = 'Идет отправка..';
                    } else if (request.readyState === 4 && request.status == 200) {
                        resolve();
                    } else {
                        reject();
                    }
                });
            });
    
            return promise;
        };
    
        const clearInput = (elem) => {
            for (let i = 0; i < elem.length; i++) {
                elem[i].value = '';
            }
        };
    
        const putImg = (target, source) => {
            for (let i = 0; i < popup.length; i++) {
                if (target == popup[i].querySelector('form')) {
                    popup[i].appendChild(statusImg);
                    statusImg.src = source;
                    statusImg.style.cssText = `display: block; \
                            max-width: 100%; \
                            max-height: 200px; \
                            margin: auto; \
                            `;
                }
            }
        };
    
        let modalBlock = document.querySelector(classModalBlock);
    
        modalBlock.addEventListener('submit', e => {
    
            let target = e.target;
    
            e.preventDefault();
            sendForm(target)
                .then(() => {
                    statusMessge.innerHTML = "";
                    target.style.display = 'none';
                    putImg(target, "../src/img/okay.png");
                })
                .catch(() => {
                    statusMessge.innerHTML = "";
                    target.style.display = 'none';
                    putImg(target, "../src/img/browser.png");
                })
                .then(clearInput(target));
            setTimeout(() => {
                statusImg.remove();
                target.style.display = 'block';
            }, 4500);
        });
    };

    globalSendForm('.popup-content', '.modal-block');
    globalSendForm('.popup-content-2', '.consultation');

};

module.exports = form;

/***/ }),

/***/ "./src/js/parts/modal.js":
/*!*******************************!*\
  !*** ./src/js/parts/modal.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

const modal = () => {
  
  let overlayOrder = document.querySelector('.popup-design'),
      overlayConsult = document.querySelector('.popup-consultation'),
      overlayGift = document.querySelector('.popup-gift'),
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

/***/ }),

/***/ "./src/js/parts/slider.js":
/*!********************************!*\
  !*** ./src/js/parts/slider.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

const slider = () => {


  let slideIndex = 1,
      btnNext = document.querySelector('.main-slider-btn.main-next-btn img'),
      btnPrev = document.querySelector('.main-slider-btn.main-prev-btn img'),
      slides = document.querySelectorAll('.feedback-slider-item');

  showSlides(slideIndex);

  // let autoplay = setTimeout( function play() {
  //   plusSlides(1);
  //   setTimeout(play, 7000);
  // });

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
      slides[slideIndex - 1].classList.remove('animated', 'fadeInRight');
      


    }
    if (target == btnNext) {

      plusSlides(1);
    }

  });



};

module.exports = slider;

/***/ }),

/***/ "./src/js/parts/valid.js":
/*!*******************************!*\
  !*** ./src/js/parts/valid.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function valid() {
  // Валидация данных ввода в инпуты
  document.body.addEventListener("input", e => {
    let target = e.target;

    if (target.getAttribute("name") === "phone") {
      target.value = "+" + target.value.replace(/[^0-9]/g, "").substring(0,12);
      if (target.value.length == 1) {
        target.value = "";
      }
    }

  });
}

module.exports = valid;

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded',  () => {

  'use strict';
let modal = __webpack_require__(/*! ./parts/modal.js */ "./src/js/parts/modal.js"),
    form = __webpack_require__(/*! ./parts/form.js */ "./src/js/parts/form.js"),
    valid = __webpack_require__(/*! ./parts/valid.js */ "./src/js/parts/valid.js"),
    calc = __webpack_require__(/*! ./parts/calc.js */ "./src/js/parts/calc.js"),
    filter = __webpack_require__(/*! ./parts/filter.js */ "./src/js/parts/filter.js"),
    slider = __webpack_require__(/*! ./parts/slider.js */ "./src/js/parts/slider.js"),
    accordion = __webpack_require__(/*! ./parts/accordion.js */ "./src/js/parts/accordion.js");
    // timer = require('./parts/timer.js'),

  modal();
  form();
  valid();
  calc();
  filter();
  slider();
  accordion();
  // timer();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map