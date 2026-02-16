import { Arcanin } from "./class/Arcanin.js";
import { Leviator } from "./class/Leviator.js";
import { Noadkoko } from "./class/Noadkoko.js";

let persos = document.querySelectorAll(".card");
let menu = document.querySelector(".menu");

//Choix perso

for (let perso of persos) {

    perso.addEventListener("click", function (e) {

        e.preventDefault();

        menu.classList.add("opacity");
        setTimeout(() => {

            menu.classList.add("hidden");

        }, 1000);

        let choix = this;

        setPerso(choix);

    });

}

//bataille



function setPerso(choix) {

    //Configuration joueur et adversaire

    let user = null;

    let advers = [new Arcanin(), new Leviator(), new Noadkoko()];
    let rand = Math.floor(Math.random() * 3);
    advers = advers[rand];

    let adversName = document.querySelector(".nameStat2");
    let adversHp = document.querySelector(".life2");
    let adversJauge = document.querySelector(".vie2");
    let adversImg = document.querySelector(".pokemonImg2");

    adversName.textContent = advers.nom;
    adversHp.textContent = `HP: ${advers.hp} / ${advers.hp}`;
    adversImg.setAttribute("src", advers.url);

    let title = document.querySelector(".messageP");
    title.textContent = `Un ${advers.nom} sauvage apparait !`

    switch (choix.dataset.name) {

        case "Arcanin":

            user = new Arcanin();
            break;

        case "Leviator":

            user = new Leviator();
            break;

        case "Noadkoko":

            user = new Noadkoko();
            break;

        default:

            console.log("ERREUR !");


    }

    let persoName = document.querySelector(".nameStat1");
    let persoHp = document.querySelector(".life1");
    let persoJauge = document.querySelector(".vie1");
    let persoImg = document.querySelector(".pokemonImg1");

    persoName.textContent = user.nom;
    persoHp.textContent = `${user.hp} / ${user.hp}`;
    persoImg.setAttribute("src", user.url);

    persoImg.classList.add("rotate");
    persoImg.classList.add("scale");

    setTimeout(() => {

        adversImg.classList.add("scale");
        adversName.classList.remove("opacity");
        adversHp.classList.remove("opacity");
        adversJauge.classList.remove("fullLife");
        persoJauge.classList.remove("fullLife");
        persoName.classList.remove("opacity");
        persoHp.classList.remove("opacity");
        title.classList.remove("opacity");

    }, 500);



    //configuration button d'action


    let tabButton = document.querySelectorAll(".attaque");

    for (let i = 0; i < tabButton.length; i++) {

        tabButton[i].textContent = user.attack[i].nom;

    }



}

