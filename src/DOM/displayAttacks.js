function displayMove(board, coordinates, boolean) {
    let target = findGridTarget(board, coordinates);
    if (boolean) {
        target.classList.remove('ship');
        target.classList.add('hit');
    } else target.classList.add('missed');
}

function findGridTarget(board, coordinates) {
    let list = document.getElementsByClassName(board + " " + coordinates);
    return list[0];
}

export { displayMove }