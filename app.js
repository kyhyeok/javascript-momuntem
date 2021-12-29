const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input[type="text"]');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

const savedUsername = localStorage.getItem(USERNAME_KEY);

const usernameValid = (username) => {
    if (username === '') {
        alert('이름을 입력해주세요.');
        loginInput.focus();
        return false;
    } else if (username.length > 16) {
        alert('이름의 길이가 지나치게 깁니다.');
        loginInput.focus();
        return false;
    }
    return true;
};

const paintGreetings = (username) => {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
};

const onLoginSubmit = (event) => {
    event.preventDefault();
    const username = loginInput.value;
    if (usernameValid(username)) {
        loginForm.classList.add(HIDDEN_CLASSNAME);
        localStorage.setItem(USERNAME_KEY, username);
        paintGreetings(username);
    }
};

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}
