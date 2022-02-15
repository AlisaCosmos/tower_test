'use strict';

//2.1 В тестовом файле из задания один сделать, чтобы при нажатии кнопки
//"Кнопка 1" скрывался блок с заголовком. При повторном нажатии блок
//должен появляться.
//2.2 При нажатии кнопки "Кнопка 2" средний блок во втором ряду должен
//меняться местами с левым блоком. При повторном нажатии - возвращаться
//на прежнее место.

//получаем кнопки в псевдомассив для обработчика 
const blocksWrapper = document.querySelector('.blocks__wrapper');

const btns = document.querySelectorAll('.btn');
// получаем элемент где будем скрывать заголовок
const title = document.querySelector('.title');
// получаем элементы блоков 
const blocksItems = document.querySelectorAll('.blocks__wrapper div');

//Функция тоглит заголовок
const modificationTitle = (event) => {
    console.log(event.target);
    //Провяряю наличие класса 
    if (title.classList.contains('title_none')) {
        console.log('Зашло в if');
        // удаляю класс
        console.log(title.classList.remove('title_none'));
    } else {
        //добавляю класс
        console.log('Зашло в else');
        title.classList.add('title_none')
    }
};

//Функция меняет блоки местами
const changeBlocks = (event) => {
    //Провяряю наличие класса 
    if ((blocksItems[1].classList.contains('two')) && (blocksItems[2].classList.contains('tree'))) {
        console.log('Зашло в if');
        // удаляю класс
        blocksItems[1].classList.remove('two');
        blocksItems[2].classList.remove('tree');

    } else {
        //добавляю класс
        console.log('Зашло в else');
        blocksItems[1].classList.add('two');
        blocksItems[2].classList.add('tree');
    }
};

blocksWrapper.addEventListener('click', (event) => {
    console.dir(event.target);
    if (event.target.className == ('btn btn_yellow')) {
        console.log(`Нажали на желтую`);
        modificationTitle(event);
    } else if (event.target.className == ('btn btn_green')) {
        console.log(`Нажали на зеленую`);
        changeBlocks(event);
    }
});

//на кнопки добавила обработчик события потому что они лежат в псевдомассиве 
/* btns.forEach((btn) => {
    console.log(`Сработало ${btn}`);
    btn.addEventListener('click', modificationTitle);
}) */
// console.log("Событие обработано");
// target.removeEventListener("click", handleClick); // Явно удалять обработчик больше нет необходимости



//2.3 Сделать, чтобы при открытии страницы появлялось модальное окно с
//надписью "Привет, мир".

const modalTrigger = document.querySelector('[data-modal]');
console.log(modalTrigger);
const modal = document.querySelector('.overlay');
console.log(modal);
const modalCloseBtn = document.querySelector('.modal__close');

//
modalTrigger.addEventListener('click', () => {
    modal.classList.add('show');
    modal.classList.remove('hide');

})
modalCloseBtn.addEventListener('click', () => {
    modal.classList.add('hide');
    modal.classList.remove('show');
})