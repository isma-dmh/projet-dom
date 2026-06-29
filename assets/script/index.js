import { Arcanin } from "./class/Arcanin.js";
import { Leviator } from "./class/Leviator.js";
import { Noadkoko } from "./class/Noadkoko.js";


//Page Choix perso


let persos = document.querySelectorAll(".card");
let menu = document.querySelector(".menu");

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


// Page combat


function setPerso(choix) {

    //Configuration joueur et adversaire

    let user = null;

    let advers = [new Arcanin(), new Leviator(), new Noadkoko()];
    let rand = Math.floor(Math.random() * 3);
    advers = advers[rand];

    let adversName = document.querySelector(".nameStat2");
    let adversHp = document.querySelector(".life2");
    let adversMaxHp = advers.hp;
    let vieAdvers = (advers.hp / adversMaxHp) * 100;
    let adversJauge = document.querySelector(".vie2");
    adversJauge.style.width = `${vieAdvers}%`;
    let adversImg = document.querySelector(".pokemonImg2");




    adversName.textContent = advers.nom;
    adversHp.textContent = `HP: ${advers.hp} / ${adversMaxHp}`;
    adversImg.setAttribute("src", advers.url);

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
    let viePerso = (advers.hp / adversMaxHp) * 100;
    let persoJauge = document.querySelector(".vie1");
    persoJauge.style.width = `${viePerso}%`;
    let persoImg = document.querySelector(".pokemonImg1");

    persoName.textContent = user.nom;
    let userMaxHp = user.hp;
    persoHp.textContent = `HP: ${user.hp} / ${userMaxHp}`;
    persoImg.setAttribute("src", user.url);

    persoImg.classList.add("rotate");
    persoImg.classList.add("scale");

    let title = document.querySelector(".messageP");
    title.textContent = `Un ${advers.nom} sauvage apparait !`

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

    // combat

    let tabButton = document.querySelectorAll(".attaque");

    for (let i = 0; i < tabButton.length; i++) {

        tabButton[i].textContent = user.atk[i].nom;

        tabButton[i].addEventListener("click", function (e) {

            e.preventDefault();

            let userAtk = user.atk[i];

            persoImg.classList.remove("persoCoup");
            persoImg.classList.remove("persoAttack");
            adversImg.classList.remove("adversAttack");
            title.classList.remove("inefficace");
            title.classList.remove("messageSuccess");

            for (let button of tabButton) {

                button.disabled = true;
                button.classList.add("grayscale")

            }

            const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

            const delay = async () => {

                //Attaque joueur

                title.classList.add("messageAlert");
                title.textContent = `${user.nom} utilise ${this.textContent}`;

                await wait(500);

                persoImg.classList.add("persoAttack");

                await wait(500);
                adversImg.classList.add("adversCoup");

                let success = user.successAtk(userAtk);
                let type = advers.checkType(userAtk);


                if (success && type) {

                    title.classList.remove("messageAlert");

                    advers.hp -= user.atkBonus(userAtk) * 2;
                    title.classList.add("messageSuccess");
                    title.textContent = "C'était super efficace";

                } else if (success) {

                    advers.hp -= user.atkBonus(userAtk);

                } else {

                    title.classList.remove("messageAlert");
                    advers.hp -= user.atkBonus(userAtk) / 2;
                    title.classList.add("inefficace");
                    title.textContent = "Ce n'était pas tres efficace";

                }


                if (advers.hp > 0) {

                    adversHp.textContent = `HP: ${advers.hp} / ${adversMaxHp}`;
                    vieAdvers = (advers.hp / adversMaxHp) * 100;
                    adversJauge.style.width = `${vieAdvers}%`;

                    await wait(1500);

                    //Attaque ennemi

                    title.classList.remove("messageSuccess");
                    adversImg.classList.remove("adversCoup");

                    let adversAtk = advers.randAttack;

                    title.classList.add("messageAlert");

                    title.textContent = `${advers.nom} utilise ${adversAtk.nom}`;

                    await wait(500);

                    adversImg.classList.add("adversAttack");
                    await wait(500);

                    persoImg.classList.add("persoCoup");

                    success = advers.successAtk(adversAtk);
                    type = user.checkType(adversAtk);


                    if (success && type) {

                        title.classList.remove("messageAlert");

                        user.hp -= advers.atkBonus(adversAtk) * 2;
                        title.classList.add("messageSuccess");
                        title.textContent = "C'était super efficace";

                    } else if (success) {

                        user.hp -= advers.atkBonus(adversAtk);

                    } else {

                        title.classList.remove("messageAlert");
                        user.hp -= advers.atkBonus(adversAtk) / 2;
                        title.classList.add("inefficace");
                        title.textContent = "Ce n'était pas tres efficace";

                    }


                    if (user.hp <= 0) {

                        persoJauge.style.width = `0%`;
                        persoHp.textContent = `HP: 0 / ${userMaxHp}`;
                        title.classList.remove("messageAlert");
                        title.classList.add("messageDefeat");
                        await wait(1000);
                        title.textContent = `${user.nom} est K.O, Vous avez perdu`;
                        persoImg.classList.add("opacity");
                        await wait(4000);


                    } else {

                        viePerso = (user.hp / userMaxHp) * 100;
                        persoJauge.style.width = `${viePerso}%`;
                        persoHp.textContent = `HP: ${user.hp} / ${userMaxHp}`;

                    }

                } else {


                    adversHp.textContent = `HP: 0 / ${adversMaxHp}`;

                    adversJauge.style.width = `0%`;

                    title.classList.remove("messageAlert");
                    title.classList.add("messageSuccess");

                    wait(1000);

                    title.textContent = `Victoire! ${advers.nom} est K.O`;
                    adversImg.classList.add("opacity");

                    await wait(4000);


                }

                await wait(500);


                if (user.hp <= 0 || advers.hp <= 0) {

                    let choix = confirm("Voulez vous recommencer ?")

                    if (choix) {

                        window.location.href = "./index.html";

                    } else {

                        window.location.href = "./accueil.html";

                    }

                }

                for (let button of tabButton) {

                    button.disabled = false;
                    button.classList.remove("grayscale")

                }


            }

            delay();

        })

    }

}
