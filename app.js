let score = 0
const showScore = document.getElementById('score');

function countScore() {
    score++
    console.log(score);
    showScore.textContent = score
}

