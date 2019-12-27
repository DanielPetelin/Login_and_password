document.getElementById('chack').onclick = function() {
    var login = document.getElementById('login');
    var password = document.getElementById('password');

    if (login == 'ivan' && password == '334455') {
        alert('Добро пожаловать!')
    }
}