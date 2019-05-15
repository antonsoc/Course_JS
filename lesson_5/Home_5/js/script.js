let menu = document.getElementsByClassName('menu')[0],
    menuItem = document.getElementsByClassName('menu-item'),
    title = document.getElementById('title'),
    column = document.getElementsByClassName('column'),
    adv = column[1].getElementsByClassName('adv')[0],
    userPrompt = document.getElementById('prompt');

//Восстановить порядок в меню, добавить пятый пункт

createMenuItem();

function createMenuItem() {
    
    menu.insertBefore(menuItem[2], menuItem[1]);

    let menuItemLi = document.createElement('li');

    menuItemLi.classList.add('menu-item');
    menuItemLi.textContent = 'Пятый пункт';
    menu.appendChild(menuItemLi);

}

//Заменить картинку заднего фона на другую из папки img

document.body.style.background = 'url("img/apple_true.jpg")';

//Поменять заголовок, добавить слово "подлинную" 
//( Получится - "Мы продаем только подлинную технику Apple")

title.textContent = 'Мы продаем только подлинную технику Apple';

//Удалить рекламу со страницы

adv.remove();

//Спросить у пользователя отношение к технике apple и записать ответ 
//в блок на странице с id "prompt"

let answer = prompt("Ваше отношение к технике Apple?", "");
userPrompt.textContent = answer;