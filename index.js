const { Builder, By, Key, until } = require('selenium-webdriver');

async function runAutomation(webhookType) {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://app.ichibot.trade/');

        // Explicitly wait for the search input field to become visible
        let searchInput = await driver.wait(until.elementLocated(By.css('input[type="text"]')), 10000);

        // Enter the desired text into the search input field
        await searchInput.sendKeys('login');

        // Press Enter key to submit the form
        await searchInput.sendKeys(Key.ENTER);


// Enter the desired text into the search input field
        await searchInput.sendKeys('b');

        // Press Enter key to submit the form
        await searchInput.sendKeys(Key.ENTER);
        // You can perform further actions here, like waiting for page navigation, verifying results, etc.

        await searchInput.sendKeys('c');

        // Press Enter key to submit the form
        await searchInput.sendKeys(Key.ENTER);
        // You can perform further actions here, like waiting for page navigation, verifying results, etc.

        await searchInput.sendKeys('X8G3zFklElQu34TmTQSZp3CEF1Ygtl8O6Hu5S9DiEEv3OX1ZGqtwnfzhhUnpTiV7');

        // Press Enter key to submit the form
        await searchInput.sendKeys(Key.ENTER);
        // You can perform further actions here, like waiting for page navigation, verifying results, etc.

        await searchInput.sendKeys('Mk6FP8Sd4qxygGxflsEwoJpu7NiDlWOIywWM9NfzZIhXxgSOSnXyko0FOuhcwE4j');

        // Press Enter key to submit the form
        await searchInput.sendKeys(Key.ENTER);
        // You can perform further actions here, like waiting for page navigation, verifying results, etc.

        await searchInput.sendKeys('kubb');

        // Press Enter key to submit the form
        await searchInput.sendKeys(Key.ENTER);
        await driver.sleep(4000);
   
        // Perform other actions (login, etc.)

        // Define the order based on the webhook type
        let order;
        if (webhookType === 'longhook') {
            order = 'close shorts, instrument linkusdt, leverage 2, buy 180%account';
        } else if (webhookType === 'shorthook') {
            order = 'close longs, instrument linkusdt, leverage 2, sell 180%account';
        } else {
            throw new Error('Invalid webhook type');
        }

        // Enter the desired order into the search input field
        await searchInput.sendKeys(order);

        // Press Enter key to submit the form
        await searchInput.sendKeys(Key.ENTER);

        // Wait for a few seconds to see the result
        await driver.sleep(30000);
    } finally {
        await driver.quit();
    }
}

module.exports.runAutomation = runAutomation;
