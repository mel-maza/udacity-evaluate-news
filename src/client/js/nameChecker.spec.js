const { checkForName } = require('./nameChecker');

describe('checkForName...', () => {
    it('should show an alert', () => {
        jest.spyOn(window, 'alert').mockImplementation(()=>{});
        checkForName('Picard');
        expect(window.alert).toBeCalledWith("Welcome, Captain!");
    })

    it('should not show an alert', () => {
        jest.spyOn(window, 'alert').mockImplementation(()=>{});
        checkForName('Melanie');
        expect(window.alert).not.toBeCalledWith();
    })
})
