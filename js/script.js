document.getElementById('check').onclick = function() {
    var login = document.getElementById('login');
    var password = document.getElementById('password');

    if (login == 'Иван' && password == '334455') {
        alert('Добро пожаловать!')
    } else if (login == 'Алекс' && password == '777') {
        alert('Добро пожаловать!');
    } else if (login == 'Пётер' && password == 'b5678') {
        alert('Добро пожаловать!')
    } else {
        alert('Пороль или логин неверен');
    }
}