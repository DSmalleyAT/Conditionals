const ChexPage = require('../pageobjects/checkboxes.page');

describe('My Checkbox application', () => {
    it('should be able to click checkbox one IF not clicked already', async () => {
        await ChexPage.open();

        await browser.pause(800);

        await expect (ChexPage.checkOne).toBeExisting();

        if (!(await ChexPage.checkOne.getAttribute ('checked'))){
            await ChexPage.checkOne.click();
        } else {
            
        }

        await browser.pause(3000);
    
    });
});