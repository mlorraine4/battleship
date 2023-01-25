function clearBoards() {
    document.querySelector("#playerBoard").innerHTML = "";
    document.querySelector("#computerBoard").innerHTML = "";
}

function restartHealthDivs() {
    document.querySelector("#carrierHealthPlayer").innerHTML = "5/5";
    document.querySelector("#battleshipHealthPlayer").innerHTML = "4/4";
    document.querySelector("#cruiserHealthPlayer").innerHTML = "3/3";
    document.querySelector("#submarineHealthPlayer").innerHTML = "3/3";
    document.querySelector("#destroyerHealthPlayer").innerHTML = "2/2";

    document.querySelector(".carrierEnemy").style.color = "gray";
    document.querySelector(".battleshipEnemy").style.color = "gray";
    document.querySelector(".cruiserEnemy").style.color = "gray";
    document.querySelector(".submarineEnemy").style.color = "gray";
    document.querySelector(".destroyerEnemy").style.color = "gray";
}


export { clearBoards, restartHealthDivs }