function guessNumber(guess) {
  var randomNumber = Math.floor(Math.random() * 10) + 1;
  
  var resultElement = document.getElementById("result");
  if (guess === randomNumber) {
    resultElement.textContent = "Parabéns, você acertou!";
  } else {
    resultElement.textContent = "Falhou, tente de novo!";
  }
}
