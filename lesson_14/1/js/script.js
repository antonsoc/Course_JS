window.addEventListener('DOMContentLoaded', function() {

    'use strict'
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContant(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContant(i);
                    break;
                }
            }
        }
    });

    // Timer

    let deadline = '2019-05-10';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor( (t/1000) % 60 ),
            minutes = Math.floor( (t/1000/60) % 60 ),
            hours = Math.floor( (t/1000/60/60) );

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);

            function addZero(num) {
                if (num <= 9) {
                    return '0' + num;
                } else {
                    return num;
                }
            };

            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);

                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }

    setClock('timer', deadline);

    // Modal

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    let descriptionBtn = document.querySelectorAll('.description-btn');

    descriptionBtn.forEach(function(elem) {
        elem.addEventListener('click', function() {
            overlay.style.display = 'block';
            elem.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });
    });
    console.log(descriptionBtn);

    // FORM Modal

    let message = {
        loading: 'Загружается..',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так'
    }

    let form = document.querySelector('.main-form'),
        statusMessage = document.createElement('div');
    
    statusMessage.classList.add('status');

    function sendForm(elem) {
        elem.addEventListener('submit', function(event) {
            event.preventDefault();
            elem.appendChild(statusMessage);
            
            let inputs = elem.getElementsByTagName('input');

            let formData = new FormData(elem);

            function postData(data) {
                return new Promise(function(resolve, reject) {
                    let request = new XMLHttpRequest();

                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); //application/json; charset=utf-8

                    // json
                    //
                    //let obj = {};
                    // formData.forEach(function(value, key) {
                    //     obj[key] = value;
                    // });
                    //
                    // let json = JSON.stringify(obj);

                    request.send(data);

                    request.addEventListener('readystatechange', function() {
                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState === 4 && request.status == 200) {
                            resolve();
                        } else {
                            reject();
                        }
                    });
                });  
            }; // END postData

            function clearInput() {
                for (let i = 0; i < inputs.length; i++) {
                    inputs[i].value = '';
                }
            };

            postData(formData)
                            .then( () => statusMessage.innerHTML = message.loading)
                            .then( () => statusMessage.innerHTML = message.success)
                            .catch( () => statusMessage.innerHTML = message.failure)
                            .then(clearInput)
        });
    } // END sendForm

    sendForm(form);

    // FORM Contact
    //
     let contactForm = document.getElementById('form');
    //     contactInput = contactForm.getElementsByTagName('input');

    // contactForm.addEventListener('submit', function(event) {
    //     event.preventDefault();
    //     contactForm.appendChild(statusMessage);

    //     let request = new XMLHttpRequest();

    //     request.open('POST', 'server.php');
    //     request.getResponseHeader('Content-Type', 'application/x-www-form-urlencoded');

    //     let formData = new FormData(contactForm);
    //     request.send(formData);

    //     request.addEventListener('readystatechange', function() {
    //         if (request.readyState < 4) {
    //             statusMessage.innerHTML = message.loading;
    //         } else if (request.readyState === 4 && request.status == 200) {
    //             statusMessage.innerHTML = message.success;
    //         } else {
    //             statusMessage.innerHTML = message.failure;
    //         }
    //     });

    //     for (let i = 0; i < contactInput.length; i++) {
    //         contactInput[i].value = '';
    //     };
    // });
    
    sendForm(contactForm);
});