const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");


function onLoginSubmit(tomato){
    tomato.preventDefault();
    console.log(tomato);
}

loginForm.addEventListener("submit",onLoginSubmit);
