"use strict";

//2.4 Сделать в отдельном файле форму с 5 выпадающими списками и 2
//полями для ручного ввода информации. Списки должны содержать цифры от
//1 до 5. Также нужна кнопка для отправки формы.


//2.5 Сделать формирование JSON-структуры из данных формы. Выводить ее
//на экран под формой. Отправка формы не должна перезагружать страницу.
//2.6 Форма должна отправлять асинхронный GET-запрос к абстрактному
//обработчику на том же сервере (в той же папке). В случае, если данные
//дошли, надо получать ответ. Можно выводить его через alert.

const lastname = document.getElementById('lastname');
const firstname = document.getElementById('firstname');
const tel = document.getElementById('tel');
const email = document.getElementById('email');
const username = document.getElementById('username');
const password = document.getElementById('password');
const passwordVerification = document.getElementById('passwordVerification');
const btnGet = document.getElementById('btnGet');


//email
const regEmail = /@/;


//навешиваем обработчик на кнопку отправки формы
btnGet.addEventListener('click', function (event) {
    checkValueForm();
});

// функция проверяет все ли поля заполнены пользователем перед отправкой , идентичность пароля и правильность заполнения емайла 
function checkValueForm() {
    document.getElementById('errovMessage').innerHTML = '';
    if (lastname.value == '' || firstname.value == '' || tel.value == '' || email.value.value == '' || password.value == '' || passwordVerification.value == '') {
        document.getElementById('errovMessage').innerHTML += 'Не все поля формы заполнены <br>';
    } else if (password.value != passwordVerification.value) {
        document.getElementById('errovMessage').innerHTML += 'Введенный пароль не совпадает<br>';
    } else if (email.value.search(regEmail) == -1) {
        console.log(email.value);
        document.getElementById('errovMessage').innerHTML += `Адрес электронной почты должен содержать символ @. В адресе "${email.value}" отсутсвует символ @. Пожалуйста повторите ввод <br>`;
    } else {
        alert(`Добро пожаловать, ${username.value}! `);
        lastname.value = "";
        firstname.value = "";
        tel.value = "";
        email.value = "";
        username.value = "";
        password.value = "";
        passwordVerification.value = "";

    };

};