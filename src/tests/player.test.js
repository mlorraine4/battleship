import { Player } from "../PlayerFactory";

describe('Player', () => {
    let p1
    beforeEach(() => {
        p1 = Player();
        p1.moves.push('A1', 'A2', 'A3');
    })
    it('player adds new move', () => {
        expect(p1.addMove('A4')).toStrictEqual(['A1', 'A2', 'A3', 'A4'])
    })
    it('player reuses move', () => {
        expect(p1.addMove('A1')).toBe(false)
    })
})