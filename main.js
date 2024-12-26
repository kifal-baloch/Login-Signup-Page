document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById("login-btn");
    const signupBtn = document.getElementById("signup-btn");
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");

   
    loginBtn.addEventListener("click", function () {
        loginForm.classList.add("active");
        signupForm.classList.remove("active");
        loginBtn.classList.add("active");
        signupBtn.classList.remove("active");
    });

    signupBtn.addEventListener("click", function () {
        signupForm.classList.add("active");
        loginForm.classList.remove("active");
        signupBtn.classList.add("active");
        loginBtn.classList.remove("active");
    });

   
    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById("new-username").value.trim();
        const password = document.getElementById("new-password").value.trim();

        if (!username || !password) {
            swal("Oops...", "Please fill all the fields!", "error");
            return;
        }

        const userData = { username, password };
        localStorage.setItem("userData", JSON.stringify(userData));

        swal("Success!", "Account created successfully!", "success");
        signupForm.reset();
    });

    
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();
        const storedUserData = JSON.parse(localStorage.getItem("userData"));

        if (storedUserData && storedUserData.username === username && storedUserData.password === password) {
            swal("Success!", "You are logged in!", "success");
        } else {
            swal("Error!", "Invalid username or password!", "error");
        }

        loginForm.reset();
    });
});
