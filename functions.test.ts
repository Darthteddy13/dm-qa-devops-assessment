const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test (`SuffleArray should return an array`, () => expect(Array.isArray(shuffleArray([1,2,3]))).toBe(true));
    
    test(`Check to see if Shuffle array returns array of same length`, () => 
    {
        expect(shuffleArray([1,2,3]).length).toBe(3);
    })
})