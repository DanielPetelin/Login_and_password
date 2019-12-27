//Функция, которая будет проверять логин и пороль.

document.getElementById('check').onclick = function() {
    var login = document.getElementById('login').value;
    var password = document.getElementById('password').value;

    if (login == 'ivan' && password == '334455') {
        alert('Добро пожаловать!')
    } else if (login == 'alex' && password == '777') {
        alert('Добро пожаловать!');
    } else if (login == 'petr' && password == 'b5678') {
        alert('Добро пожаловать!')
    } else {
        alert('Пороль или логин неверен');
    }
}