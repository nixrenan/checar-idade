const form = document.getElementById('form');
const innerText = document.getElementById('inner-text')

form.addEventListener('submit', function(event){
    event.preventDefault()
    const number = document.getElementById('number').value

    if (number >= 18 && number <= 150){
        innerText.textContent = `Maior de idade.`
    } else if (number <= 18){
        innerText.textContent = `Menor de idade.`;
    } else {
        innerText.textContent = `Esqueceu de morrer.`
    }
});