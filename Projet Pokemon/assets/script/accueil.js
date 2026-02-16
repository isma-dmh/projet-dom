let buttons = document.querySelectorAll(".button");
let pokeball = document.querySelector(".buttonPokeball");
let imgPokeball = document.querySelector("#pokeball");


for (let button of buttons) {

    button.addEventListener("click", (e) => {

        e.preventDefault();


        pokeball.classList.add("activeScale");



        setTimeout(() => {

            pokeball.classList.add("activeX");

            setTimeout(() => {

                window.location.href = "./index.html";

            }, 2000);

        }, 1000);

    })
}