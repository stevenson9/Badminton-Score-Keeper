const b1 = document.querySelector("#p1Button");
const b2 = document.querySelector("#p2Button");
const reset = document.querySelector("#reset");

const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");

const playTo = document.querySelector("#playto");



let p1Score = 0;
let p2Score = 0;
let winningScore = 11;

let isGameOver = false;


b1.addEventListener("click", function() {

    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add('winner')
            p2Display.classList.add('loser')
        }

        p1Display.textContent = p1Score;
 
    }

})

b2.addEventListener("click", function() {

    if (!isGameOver) {
        p2Score += 1;

        if (p2Score === winningScore) {
            isGameOver = true;
            p2Display.classList.add('winner')
            p1Display.classList.add('loser')
        }
        p2Display.textContent = p2Score;
        
 
    }
})

function resetScore() {

    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('winner', 'loser')
    p2Display.classList.remove('loser', 'winner')
}

reset.addEventListener("click", function() {
    resetScore();
    
})

playTo.addEventListener("change", function() {

    winningScore = parseInt(this.value);
    resetScore();
})




