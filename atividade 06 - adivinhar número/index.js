function randomNumber() {
    let number = Math.floor(Math.random() * 20) + 1;
    console.log(number);

    return number;
}

randomNumber();
const secretNumber = randomNumber();

function randomNumberGeneration() {
    while (true) {
        let userNumber = Number(prompt("Número aleatório entre 1 e 20 gerado! Tente adivinhar"));

        if (userNumber > secretNumber) {
            alert("Mais baixo! Tente novamente");
            continue;
        }

        if (userNumber < secretNumber) {
            alert("Mais alto! Tente novamente");
            continue;
        }

        if (Number.isNaN(userNumber)) {
            alert("Apenas números! Tente novamente");
            continue;
        }

        if (userNumber === secretNumber) {
            alert(`Você acertou! A respota é ${secretNumber}`);
            break;
        }
    }

}

randomNumberGeneration();