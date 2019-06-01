const form = () => {

    // Отправку формы на сервер 
    // let message = {
    //     loading: 'Идет отправка..',

    // };

    let statusMessge = document.createElement('div');
    statusMessge.classList.add('status');

    let statusImg = document.createElement('img'),
        popup = document.querySelectorAll('.popup-content');




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
                        `;
            }
        }
    };

    let modalBlock = document.querySelector('.modal-block');

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
        }, 5000);
    });
};

module.exports = form;