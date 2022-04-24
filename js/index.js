const acceptButtons = [];
for (let i = 0; i < 6; i++) {
    acceptButtons[i] = document.getElementById(`accept-button-${i+1}`);
}
 
for (let i of acceptButtons) {
    i.addEventListener('click', async () => {
        i.innerText = 'Adicionado!';
        i.style.backgroundColor = '#22e032';
        setTimeout(() => {
            i.innerHTML = 'Carrinho';
            i.style.backgroundColor = '#a2b9bc';
        }, 2000)
    })
}
