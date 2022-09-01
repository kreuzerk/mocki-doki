import {castStupor} from "./spell-caster";

jest.mock('./harry-potter-names.generator', () => ({
    getRandomCharacterName: () => 'Lucius Malfoy'
}));

describe('Spell caster', function () {

    it('should cast a spell', () => {
        expect(castStupor())
            .toBe(`Pointing at Lucius Malfoy and shouting "Stupor!"`);
    });

});
