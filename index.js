let userPicture = document.getElementById('userPicture');
let iaPicture = document.getElementById('iaPicture');

let victoryBlock = document.getElementById('victory');
let defeatBlock = document.getElementById('defeat');
let score = document.getElementById('score');

let victory = 0;
let defeat = 0;

score.innerHTML= 'Score : ';
victoryBlock.innerHTML = 'Victoires : ';
defeatBlock.innerHTML = 'Défaites : ';


function history(userChoice, iaChoice)
{
    let historyParentBlock = document.createElement('div');
    historyParentBlock.classList.add('historyParentBlock');
    document.getElementById('history').appendChild(historyParentBlock);

    let historyUserBlock = document.createElement('div');
    historyUserBlock.classList.add('historyPicture');
    historyParentBlock.appendChild(historyUserBlock);
    historyUserBlock.style.cssText="background: url('img/" + userChoice + ".png');";

    let historyVSBlock = document.createElement('div');
    historyVSBlock.innerHTML= 'V.S.';
    historyParentBlock.appendChild(historyVSBlock);

    let historyIaBlock = document.createElement('div');
    historyIaBlock.classList.add('historyPicture');
    historyParentBlock.appendChild(historyIaBlock);
    historyIaBlock.style.cssText="background: url('img/" + iaChoice + ".png');";
}

// ================================================== Pierre ================================================== \\

document.getElementById('buttonRock').addEventListener('click', function () {

    userPicture.style.cssText="background: url('img/user-rock.png'); background-repeat: no-repeat;";

    let iaChoice = Math.floor(Math.random()*3) + 1;

    switch (iaChoice) {
        case 1 :
            iaPicture.style.cssText="background: url('img/ia-rock.png'); background-repeat: no-repeat; background-position: center;";
            history("rock", "rock");
            break;

        case 2 :
            iaPicture.style.cssText="background: url('img/ia-paper.png'); background-repeat: no-repeat; background-position: center;";
            defeat ++;
            history("rock", "paper");
            break;

        case 3 :
            iaPicture.style.cssText="background: url('img/ia-scissors.png'); background-repeat: no-repeat; background-position: center;";
            victory ++;
            history("rock", "scissors");
            break;
    }

    victoryBlock.innerHTML = 'Victoires : ' + victory;
    defeatBlock.innerHTML = 'Défaites : ' + defeat;

    let percentage = Math.round((victory/(victory + defeat))*100);
    score.innerHTML= 'Score : ' + percentage + '%';

});

// ================================================== Feuille ================================================== \\

document.getElementById('buttonPaper').addEventListener('click', function () {

    userPicture.style.cssText="background: url('img/user-paper.png'); background-repeat: no-repeat;";

    let iaChoice = Math.floor(Math.random()*3) + 1;

    switch (iaChoice) {
        case 1 :
            iaPicture.style.cssText="background: url('img/ia-rock.png'); background-repeat: no-repeat; background-position: center;";
            victory++;
            history("paper", "rock");
            break;

        case 2 :
            iaPicture.style.cssText="background: url('img/ia-paper.png'); background-repeat: no-repeat; background-position: center;";
            history("paper", "paper");
            break;

        case 3 :
            iaPicture.style.cssText="background: url('img/ia-scissors.png'); background-repeat: no-repeat; background-position: center;";
            defeat ++;
            history("paper", "scissors");
            break;
    }

    victoryBlock.innerHTML = 'Victoires : ' + victory;
    defeatBlock.innerHTML = 'Défaites : ' + defeat;

    let percentage = Math.round((victory/(victory + defeat))*100);
    score.innerHTML= 'Score : ' + percentage + '%';
});

// ================================================== Ciseaux ================================================== \\

document.getElementById('buttonScissors').addEventListener('click', function () {

    userPicture.style.cssText="background: url('img/user-scissors.png'); background-repeat: no-repeat;";

    let iaChoice = Math.floor(Math.random()*3) + 1;

    switch (iaChoice) {
        case 1 :
            iaPicture.style.cssText="background: url('img/ia-rock.png'); background-repeat: no-repeat; background-position: center;";
            defeat ++;
            history("scissors", "rock");
            break;

        case 2 :
            iaPicture.style.cssText="background: url('img/ia-paper.png'); background-repeat: no-repeat; background-position: center;";
            victory ++;
            history("scissors", "paper");
            break;

        case 3 :
            iaPicture.style.cssText="background: url('img/ia-scissors.png'); background-repeat: no-repeat; background-position: center;";
            history("scissors", "scissors");
            break;
    }

    victoryBlock.innerHTML = 'Victoires : ' + victory;
    defeatBlock.innerHTML = 'Défaites : ' + defeat;

    let percentage = Math.round((victory/(victory + defeat))*100);
    score.innerHTML= 'Score : ' + percentage + '%';
});