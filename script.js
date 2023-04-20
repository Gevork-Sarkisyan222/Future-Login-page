const btn = document.querySelector(".btn").addEventListener("click", ClickFunc)

function ClickFunc() {
    alert("You log into your account sucsessfully!!")
}
const forgot = document.querySelector(".forgot-text").addEventListener("click", ClickForgot)

function ClickForgot() {
    prompt("Enter your email")
    alert("The code will be sent in 1 minute by mail please wait")
}