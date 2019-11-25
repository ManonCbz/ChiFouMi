var imageOrdi = document.getElementById('imageordi');

var boutonPierre = document.getElementById('pierre');
var boutonFeuille = document.getElementById('feuille');
var boutonCiseaux = document.getElementById('ciseaux');

boutonPierre.addEventListener('click', function () {                         // Bouton Pierre

    var image = document.getElementById('image');
    image.style.cssText="background: url('img/user-rock.png'); background-repeat: no-repeat";
    console.log('Pierre');

    var choixJose = Math.floor(Math.random()*3) + 1;
    switch (choixJose) {
        case 1 :
            console.log('José a choisi Pierre');
            imageOrdi.style.cssText="background: url('img/jose-rock.png'); background-repeat: no-repeat";
            break;

        case 2 :
            console.log('José a choisi Feuille');
            imageOrdi.style.cssText="background: url('img/jose-paper.png'); background-repeat: no-repeat";
            break;

        case 3 :
            console.log('José a choisi Ciseaux');
            imageOrdi.style.cssText="background: url('img/jose-scissors.png'); background-repeat: no-repeat";
            break;
    }
});


boutonFeuille.addEventListener('click', function () {                    // Bouton Feuille


    var image = document.getElementById('image');
    image.style.cssText="background: url('img/user-paper.png'); background-repeat: no-repeat";


    console.log('Feuille');

    var choixJose = Math.floor(Math.random()*3) + 1;
    switch (choixJose) {
        case 1 :
            console.log('José a choisi Pierre');
            imageOrdi.style.cssText="background: url('img/jose-rock.png'); background-repeat: no-repeat";
            victoire = +1;
            break;

        case 2 :
            console.log('José a choisi Feuille');
            imageOrdi.style.cssText="background: url('img/jose-paper.png'); background-repeat: no-repeat";
            break;

        case 3 :
            console.log('José a choisi Ciseaux');
            imageOrdi.style.cssText="background: url('img/jose-scissors.png'); background-repeat: no-repeat";
            victoire = -1;
            break;
    }
});



boutonCiseaux.addEventListener('click', function () {                        // Bouton ciseaux

    var image = document.getElementById('image');
    image.style.cssText="background: url('img/user-scissors.png'); background-repeat: no-repeat";

    console.log('Ciseaux');

    var choixJose = Math.floor(Math.random()*3) + 1;
    switch (choixJose) {
        case 1 :
            console.log('José a choisi Pierre');
            imageOrdi.style.cssText="background: url('img/jose-rock.png'); background-repeat: no-repeat";
            victoire = -1;
            break;

        case 2 :
            console.log('José a choisi Feuille');
            imageOrdi.style.cssText="background: url('img/jose-paper.png'); background-repeat: no-repeat";
            victoire = +1;
            break;

        case 3 :
            console.log('José a choisi Ciseaux');
            imageOrdi.style.cssText="background: url('img/jose-scissors.png'); background-repeat: no-repeat";
            break;
    }
});
