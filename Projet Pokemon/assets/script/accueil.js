let buttons = document.querySelectorAll(".button");
let pokeball = document.querySelector(".buttonPokeball");
let imgPokeball = document.querySelector("#pokeball");


for (let button of buttons) {

    button.addEventListener("click", (e) => {

        e.preventDefault();

        const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

        const animation = async () => {

            pokeball.classList.add("activeScale");
            await wait(1000);
            pokeball.classList.add("activeX");
            await wait(1000);
            window.location.href = "./index.html";


        }

        animation();

    })
}