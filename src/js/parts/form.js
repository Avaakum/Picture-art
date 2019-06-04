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