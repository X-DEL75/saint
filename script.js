// ===== SIGNUP =====
const signupForm = document.getElementById('signup-form');
if(signupForm){
    signupForm.addEventListener('submit', function(e){
        e.preventDefault();

        // Trim inputs to remove accidental spaces
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        if(username && password){
            // Save in localStorage
            localStorage.setItem('username', username.toLowerCase()); // store username in lowercase
            localStorage.setItem('password', password); // password case-sensitive

            alert('Signup successful! You can now login.');
            window.location.href = "login.html";
        } else {
            alert('Please fill in both username and password');
        }
    });
}

// ===== LOGIN =====
const loginForm = document.getElementById('login-form');
if(loginForm){
    loginForm.addEventListener('submit', function(e){
        e.preventDefault();

        const username = document.getElementById('username').value.trim().toLowerCase(); // case-insensitive
        const password = document.getElementById('password').value.trim();

        const savedUsername = localStorage.getItem('username');
        const savedPassword = localStorage.getItem('password');

        if(username === savedUsername && password === savedPassword){
            localStorage.setItem('loggedInUser', savedUsername); // store for home page
            window.location.href = "home.html";
        } else {
            alert('Invalid username or password');
        }
    });
}

// ===== HOME PAGE =====
if(window.location.pathname.endsWith('home.html')){
    const user = localStorage.getItem('loggedInUser');
    if(!user){
        window.location.href = "login.html";
    } else {
        document.addEventListener('DOMContentLoaded', () => {
            const welcome = document.getElementById('welcome-msg');
            if(welcome){
                welcome.textContent = `Welcome back, ${user}!`;
            }
        });
    }
}
// ===== LOGOUT =====
document.addEventListener('DOMContentLoaded', () => {
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      // Remove user from localStorage
      localStorage.removeItem('loggedInUser');

      // Add fade-out class
      logoutBtn.classList.add('fade-out');

      // Optional: fade out the whole page
      document.body.classList.add('fade-out');

      // Wait 1 second, then redirect
      setTimeout(() => {
        window.location.href = "login.html";
      }, 1000);
    });
  }
});