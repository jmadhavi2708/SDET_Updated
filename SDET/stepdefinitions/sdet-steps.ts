
import { Given, setDefaultTimeout, Then, When } from "cucumber";

import { browser, by, element, ElementArrayFinder, ElementFinder, protractor } from "protractor";

setDefaultTimeout(120 * 1000)

import chai = require ("chai");
import { getRequest } from "../support/api-helper";

Given('I open SDET Home Page', async function () {


    await browser.get("http://localhost:3000")

});


Given('I click on the ADD OVERRIDE', async function () {

    await element(by.xpath("//*[contains(text(),'ADD OVERRIDE')]")).click();
    await browser.sleep(2000)

});


Given('I verify the text {string} value', async function (errorText: string) {

    chai.assert.isTrue(await element(by.xpath("//*[text()='" + errorText + "']")).isDisplayed());

});


Then('I input the {string} in the from Feild', async function (input: string) {

    let fromField: ElementFinder = await element(by.xpath('//*[@id="minLevel"]'));
    await fromField.sendKeys(input);


});


Then('I input the {string} in the To Feild', async function (input: string) {
    let fromField: ElementFinder = await element(by.xpath('//*[@id="maxLevel"]'));
    await fromField.sendKeys(input);
});



Then('I clear the input text in from feild', async function () {
    let fromField: ElementFinder = await element(by.xpath('//*[@id="minLevel"]'));
    await fromField.click();
    await fromField.clear();
    await fromField.sendKeys(protractor.Key.BACK_SPACE);
    await fromField.sendKeys(protractor.Key.BACK_SPACE);
    await fromField.sendKeys(protractor.Key.BACK_SPACE);

    await browser.sleep(3000)

});


Then('I Enter the value as {string} End date', async function (input: string) {


    let endDateCal: ElementFinder = await element(by.xpath('(//button)[5]'));
    await endDateCal.click();
    await browser.sleep(3000)
    let setDate: ElementFinder = await element(by.xpath('//*[text()="27"]'));
    await setDate.click();
    await browser.sleep(3000)
    let nextArrow: ElementFinder = await element(by.xpath('//*[@data-testid="ArrowRightIcon"]'));
    await nextArrow.click();
    await browser.sleep(3000)
    let setMin: ElementFinder = await element(by.xpath('//*[text()="55"]'));
    await browser.actions().mouseMove(setMin).click().perform();
    // await setMin.click();
    await browser.sleep(3000)












});



var res;

Given('I launch the {string} url', async function (url: string) {

    res = await getRequest(url)

});


Then('the HTML content is returned with a {int} code', async function (int) {


    chai.assert.equal(res.status, 200)
    chai.assert.equal(res.statusText, "OK")



});










