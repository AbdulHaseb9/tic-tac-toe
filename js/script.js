const btns = document.querySelectorAll('.btns');
const btnCont = document.getElementById('btncontainer');
const resetBtn = document.getElementById('reset');
const winner = document.getElementById('winner');

var turn = true; // if Turn is true value is 0 else X 

const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

btns.forEach((element, index) => {
    btns[index].addEventListener('click', () => {
        if (turn) {
            element.innerHTML = '0';
            turn = false;
            element.disabled = true;
            checkWinner();
        } else {
            element.innerHTML = 'X';
            turn = true;
            element.disabled = true;
            checkWinner();
        }
    })
});

const checkWinner = () => {
    for (const i of winPattern) {
        let box1Val = btns[(i[0])].innerHTML;
        let box2Val = btns[(i[1])].innerHTML;
        let box3Val = btns[(i[2])].innerHTML;
        if (box1Val && box2Val && box3Val != '') {
            if (box1Val === box2Val && box1Val === box3Val) {
                showWinner(box1Val);
                for (const box of btns) {
                    box.disabled = true;
                }
            }
        }
    }
}

const showWinner = (win) => {
    winner.innerHTML = `Congratulation ${win} won this game.`;
    winner.style.display = "block";
}

const reset = () => {
    btns.forEach((element) => {
        element.innerHTML = ""
        element.disabled = false
    });
    winner.style.display = "none";
}