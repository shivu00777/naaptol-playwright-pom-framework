 import {test, expect} from "@playwright/test";
 
 test("Naaptol in new incognito context", async ({ browser }) => {
  const context = await browser.newContext(); // This creates a brand-new Incognito window.
  const incognitoPage = await context.newPage(); // Opens a new tab inside that Incognito window.

  await incognitoPage.goto("https://www.naaptol.com/");  // Open Url

  await incognitoPage.click('[name="header_search_text"]');  // fill data on search bar
  await incognitoPage.type('[name="header_search_text"]', "mobile", { delay: 100 });

  await incognitoPage.locator("//span[contains(text(),'Premium')]").click();  // select data from autosuggestion

// Click on Cash On dilevery
 await incognitoPage.click('[name="iscod"]');

  await incognitoPage.waitForTimeout(3000);

  // await context.close();
 });
