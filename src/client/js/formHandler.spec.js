const { isValidURL } = require('./formHandler');

describe('isValidURL...', () => {
    it('should return true', () => {
        const actualResult = isValidURL('https://www.google.com/');
        expect(actualResult).toBeTruthy;
    })
    it('should return false', () => {
        const actualResult = isValidURL('Melanie');
        expect(actualResult).toBeFalsy;
    })
})