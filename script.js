
document.addEventListener("DOMContentLoaded", function() {
    const signUp_button = document.getElementById("sign-up")
    const login_Form = document.getElementById("login-form")
    const signUp_Form = document.getElementById("signUp-form")
    const login_button = document.getElementById("log-in")

    signUp_button.addEventListener("click", function() {
        login_Form.style.display = "none"
        signUp_Form.style.display = "block"
    })

    login_button.addEventListener("click", function() {
        login_Form.style.display = "block"
        signUp_Form.style.display = "none"
    })

})