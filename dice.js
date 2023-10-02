function rollDice(){
    console.log('functionncalled')
    const randomNumber = document.createElement("p");
    const randomNumber1 = document.createElement("p");
    const sum = document.createElement("p");
    randomNumber.textContent = Math.floor(Math.random() * 6) + 1;
    randomNumber1.textContent = Math.floor(Math.random() * 6) + 1;
    sum.textContent = Math.floor(randomNumber.textContent) + Math.floor(randomNumber1.textContent);
    document.body.appendChild(randomNumber);
    document.body.appendChild(randomNumber1);
    document.body.appendChild(sum);

}
const button = document.querySelector('button')
button.addEventListener("click", rollDice);