import { player } from "..";
import { controller } from "../controller";
import { createBoard } from "./createPlayerBoard";
import { createCompBoard } from "./createComputerBoard";


function addListener() {
    window.addEventListener('click', handleClick);
}

function handleClick(event) {
    if (event.target.className.includes('playerGrid') || event.target.id === "") {
        return;
    }
    if (player.turn) {
        controller(event.target.id);
    }
};

const UI = () => {
    addListener();
    createBoard();
    createCompBoard();
};

export { UI }

/*
credits:
<a href="https://www.flaticon.com/free-icons/damage" title="damage icons">Damage icons created by Febrian Hidayat - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/close" title="close icons">Close icons created by Pixel perfect - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/battleship" title="battleship icons">Battleship icons created by Darius Dan - Flaticon</a>
*/