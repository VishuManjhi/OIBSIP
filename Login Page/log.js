function register() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    const message = document.getElementById('register-message');

    if (username && password) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        message.textContent = 'Registration successful!';
        message.style.color = 'green';
        setTimeout(() => {
            showLogin();
        }, 1000);
    } else {
        message.textContent = 'Please fill in all fields.';
    }
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const message = document.getElementById('login-message');

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        document.getElementById('user-name').textContent = username;
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('secured-content').style.display = 'block';
    } else {
        message.textContent = 'Invalid username or password.';
    }
}

function logout() {
    document.getElementById('secured-content').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
}

function showLogin() {
    document.getElementById('register-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
}

function showRegister() {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('register-container').style.display = 'block';
}
