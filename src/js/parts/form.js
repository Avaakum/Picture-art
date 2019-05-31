const form = () => {
    // Отправку формы на сервер 
  let message = {
    loading: 'Идет отправка.',
    success: 'Спасибо! Скоро мы с вам свяжемся',
    failure: "ЧТо-то пошло не так..."
  };

  let statusMessge = document.createElement('div');
  statusMessge.classList.add('status');

  let img = document.createElement('img'),
      popup = document.querySelectorAll('.popup-content');



  const sendForm = (elem) => {

    elem.appendChild(statusMessge);

    let promise = new Promise( (resolve, reject) => {

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
        statusMessge.innerHTML = message.loading; 
        } else if (request.readyState === 4 && request.status == 200) {
          resolve();
        } else {       
          reject();
        }
      });
    });

    for (let i = 0; i < elem.length; i++) {
      elem[i].value = '';
    }

    return promise;
  };

  document.body.addEventListener('submit', e => {
    
    let target = e.target;
    console.log(target);
    
    //submit - событие формы, поэтому все работает, несмотря
    // на то, что цель кнопка
    e.preventDefault();
    sendForm(target)
      .then(() => {
        target.style.display = 'none';
        popup.forEach(element => {
          element.appendChild(img);
        });
        img.src = "../src/img/okay.png";
        img.style.cssText = "display: block; \
                            max-width: 100%; \
                          ";
      })
      .catch(() => {
        target.style.display = 'none';
        popup.forEach(element => {
          element.appendChild(img);
        });
        img.src = "../src/img/browser.png";
        img.style.cssText = "display: block; \
                            max-width: 100%; \
                          ";
      });
    setTimeout(() => {
      popup.removeChild(img);
      target.style.display = 'block';
    }, 5000);
  });
};

module.exports = form;