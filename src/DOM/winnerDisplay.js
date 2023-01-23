const winnerDisplay = (win) => {
    let div = document.querySelector('.winDisplay');
    div.style.display = 'block';
    if (win) {
        document.querySelector(".winText").innerHTML = "you win!";
    } else {
        document.querySelector(".winText").innerHTML = "all your ships have sunk";
}
    
}

export { winnerDisplay }