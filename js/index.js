const infoButtons = [];
const darkCurtain = document.getElementById('dark-curtain');
let infoContainer;

for (let i = 0; i < 6; i++) {
    infoButtons[i] = document.getElementById(`info-button-${i+1}`);
}


for (let i = 0; i < 6; i++) {
    infoButtons[i].addEventListener('click', async () => {
        infoContainer = document.getElementById(`info-${i+1}`)
        infoContainer.style.display = 'flex';
        darkCurtain.style.display = 'block';
    })
}

darkCurtain.addEventListener('click', () => {
    infoContainer.style.display = 'none';
    darkCurtain.style.display = 'none';
})

function carrinho(element) {
    element.innerText = 'Adicionado!';
    element.style.backgroundColor = '#22e032';
    setTimeout(() => {
        element.innerHTML = 'Carrinho';
        element.style.backgroundColor = '#a2b9bc';
    }, 2000)
}