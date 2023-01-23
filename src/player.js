const Player = () => {
    let turn = false;
    let moves = [];
    function addMove(coordinates) {
        for (let i=0; i < moves.length; i++) {
            if (coordinates === moves[i]) {
                return false;
            }
        }
        moves.push(coordinates);
    };
    return { turn, moves, addMove }
};

export { Player };