const DropdownPage = require('../pageobjects/DropdownPage') ;

describe('Dropdown', () => {
    it('can be set using selectByVisibleText', () => {
        DropdownPage.open;
        $('#dropdown').selectByVisibleText('Option 2')

        expect(DropdownPage.dropdownElement.getValue()).to.eq('2');
    });

    it ('can be set using selectByAttribute', () => {
        DropdownPage.open;
        DropdownPage.dropdownElement.selectByAttribute('value', '1');

        expect(DropdownPage.dropdownElement.getValue()).to.eq('1');
    });

    it ('can be set using selectByAttribute', () => {
        DropdownPage.open;
        DropdownPage.dropdownElement.selectByIndex(2);

        expect(DropdownPage.dropdownElement.getValue()).to.eq('2');
    });
});