const ChexPage = require('../pageobjects/checkboxes.page');

describe('My Checkbox application', () => {
    it('should be able to click checkbox one IF not clicked already', async () => {
        await ChexPage.open();

        await expect (ChexPage.checkOne).toBeExisting();

        let result = ChexPage.checkOne.hasAttribute("checked");

        if (result) {
            
        } else {
            await ChexPage.checkOne.click();
        }

    
        
    });
});