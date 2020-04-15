var imageOrdi = document.getElementById('imageordi');

var boutonPierre = document.getElementById('pierre');
var boutonFeuille = document.getElementById('feuille');
var boutonCiseaux = document.getElementById('ciseaux');

var blockVictoire = document.getElementById('victoire');
var blockDefaite = document.getElementById('defaite');
var score = document.getElementById('score');

var victoire = 0;
var defaite = 0;

score.innerHTML= 'Score : ';
blockVictoire.innerHTML = 'Victoires : ';
blockDefaite.innerHTML = 'Défaites : ';


function historique(CSSimageUser, CSSimageOrdi)
{
    var historique = document.getElementById('historique');

    var histun = document.createElement('div');
    histun.classList.add('hist1');
    historique.appendChild(histun);

    var histdeux = document.createElement('div');
    histdeux.classList.add('imghist1');
    histun.appendChild(histdeux);
    histdeux.style.cssText=CSSimageUser;

    var histtrois = document.createElement('div');
    histtrois.innerHTML= 'V.S.';
    histun.appendChild(histtrois);

    var histquatre = document.createElement('div');
    histquatre.classList.add('imghist2');
    histun.appendChild(histquatre);
    histquatre.style.cssText=CSSimageOrdi;
}

// ================================================== Pierre ================================================== \\

boutonPierre.addEventListener('click', function () {

    var image = document.getElementById('image');
    image.style.cssText="background: url('img/user-rock.png'); background-repeat: no-repeat;";

    var choixOrdi = Math.floor(Math.random()*3) + 1;

    switch (choixOrdi) {
        case 1 :
            imageOrdi.style.cssText="background: url('img/ordi-rock.png'); background-repeat: no-repeat; background-position: center";
            historique("background: url('img/rock.png'); background-repeat: no-repeat; background-position: center",
                "background: url('img/rock.png'); background-repeat: no-repeat; background-position: center");
            break;

        case 2 :
            imageOrdi.style.cssText="background: url('img/ordi-paper.png'); background-repeat: no-repeat; background-position: center";
            defaite ++;
            historique("background: url('img/rock.png'); background-repeat: no-repeat; background-position: center",
                "background: url('img/paper.png'); background-repeat: no-repeat; background-position: center");
            break;

        case 3 :
            imageOrdi.style.cssText="background: url('img/ordi-scissors.png'); background-repeat: no-repeat; background-position: center";
            victoire ++;
            historique("background: url('img/rock.png'); background-repeat: no-repeat; background-position: center",
                "background: url('img/scissors.png'); background-repeat: no-repeat; background-position: center");
            break;
    }

    blockVictoire.innerHTML = 'Victoires : ' + victoire;
    blockDefaite.innerHTML = 'Défaites : ' + defaite;

    var pourcentage = Math.round((victoire/(victoire + defaite))*100);
    score.innerHTML= 'Score : ' + pourcentage + '%';

});


// ================================================== Feuille ================================================== \\


boutonFeuille.addEventListener('click', function () {

    var image = document.getElementById('image');
    image.style.cssText="background: url('img/user-paper.png'); background-repeat: no-repeat;";

    var choixOrdi = Math.floor(Math.random()*3) + 1;

    switch (choixOrdi) {
        case 1 :
            imageOrdi.style.cssText="background: url('img/ordi-rock.png'); background-repeat: no-repeat; background-position: center";
            victoire ++;
            historique("background: url('img/paper.png'); background-repeat: no-repeat; background-position: center",
                "background: url('img/rock.png'); background-repeat: no-repeat; background-position: center");
            break;

        case 2 :
            imageOrdi.style.cssText="background: url('img/ordi-paper.png'); background-repeat: no-repeat; background-position: center";
            historique("background: url('img/paper.png'); background-repeat: no-repeat; background-position: center",
                "background: url('img/paper.png'); background-repeat: no-repeat; background-position: center");
            break;

        case 3 :
            imageOrdi.style.cssText="background: url('img/ordi-scissors.png'); background-repeat: no-repeat; background-position: center";
            defaite ++;
            historique("background: url('img/paper.png'); background-repeat: no-repeat; background-position: center",
                "background: url('img/scissors.png'); background-repeat: no-repeat; background-position: center");
            break;
    }

    blockVictoire.innerHTML = 'Victoires : ' + victoire;
    blockDefaite.innerHTML = 'Défaites : ' + defaite;

    var pourcentage = Math.round((victoire/(victoire + defaite))*100);
    score.innerHTML= 'Score : ' + pourcentage + '%';
});


// ================================================== Ciseaux ================================================== \\


boutonCiseaux.addEventListener('click', function () {

    var image = document.getElementById('image');
    image.style.cssText="background: url('img/user-scissors.png'); background-repeat: no-repeat;";

    var choixOrdi = Math.floor(Math.random()*3) + 1;

    switch (choixOrdi) {

        case 1 :
            imageOrdi.style.cssText="background: url('img/ordi-rock.png'); background-repeat: no-repeat; background-position: center";
            defaite ++;
            historique("background: url('img/scissors.png'); background-repeat: no-repeat; background-position: center",
                "background: url('img/rock.png'); background-repeat: no-repeat; background-position: center");
            break;

        case 2 :
            imageOrdi.style.cssText="background: url('img/ordi-paper.png'); background-repeat: no-repeat; background-position: center";
            victoire ++;
            historique("background: url('img/scissors.png'); background-repeat: no-repeat; background-position: center",
                "background: url('img/paper.png'); background-repeat: no-repeat; background-position: center");
            break;

        case 3 :
            imageOrdi.style.cssText="background: url('img/ordi-scissors.png'); background-repeat: no-repeat; background-position: center";
            historique("background: url('img/scissors.png'); background-repeat: no-repeat; background-position: center",
                "background: url('img/scissors.png'); background-repeat: no-repeat; background-position: center");
            break;
    }

    blockVictoire.innerHTML = 'Victoires : ' + victoire;
    blockDefaite.innerHTML = 'Défaites : ' + defaite;

    var pourcentage = Math.round((victoire/(victoire + defaite))*100);
    score.innerHTML= 'Score : ' + pourcentage + '%';
});