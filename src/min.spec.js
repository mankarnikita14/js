const min = require('./min');

describe('min', () => {


    it('min of [1,2,3,4] is 1', () => {
        expect(min([1,2,3,4])).toEqual(1);
    });
    
    it('min of [] is null', () => {
        expect(min([])).toEqual(null);
    });
})
