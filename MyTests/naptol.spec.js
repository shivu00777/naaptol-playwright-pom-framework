import {Homepage} from "../Pages/HomePage";
import { test, expect } from "@playwright/test";



test("Naptol", async({page})=>{

await page.goto("https://www.naaptol.com/");

await page.click('[name="header_search_text"]');  // fill data on search bar
await page.type('[name="header_search_text"]', "mobile", { delay: 100 });

await page.locator("//span[contains(text(),'Premium')]").click();  // select data from autosuggestion

// Click on Cash On dilevery
await page.click('[name="iscod"]');

// fill pincode
await page.fill("#pincode","400011"); 


// click on set button
await page.click('[href="javascript:void(0);"][onclick="productSearch.setPersonalisedFilter(false);"]');

// fill data in categories
// await page.getByPlaceholder('category brand', { exact: true }).fill("electronic");

// select brand Ikall
await page.fill("[name='brand']","Ikall"); 
await page.locator('[name="I KALL"]').check();


await page.locator('[name="1001 - 1400"]').check();

await page.locator('[name="Card slot"]').check();

await page.locator('[name="Dual Sim"]').check();

await page.keyboard.press("PageUp");

await page.locator("//select[@id='sortByFilter']").selectOption("Most Expensive");

await page.locator("//input[@id='cpid12613014']").check();

await page.locator("//input[@id='cpid12612047']").check();

await page.locator("#quickViewId2").hover();
await page.waitForTimeout(2000);

// when redirect to different page 
const [newPage] = await Promise.all([
  page.waitForEvent('popup'),
  page.getByText('4 SIM Big Battery Big Mobile with Inbuilt Powerbank Torch An').click() // the click that opens new tab
]);

await newPage.waitForSelector('#pincodeDeliveryId_0', { state: 'visible' });
await newPage.locator('#pincodeDeliveryId_0').fill("110076");

await newPage.getByText('Black-Blue', { exact: true }).click();

await newPage.locator(".button_1").click();
await page.waitForTimeout(2000);

await newPage.locator("div[class='clearfix'] ul[class='logo'] a").click();

await expect(page).toHaveTitle("Premium Mobile Handsets Online Store in India - Buy Premium Mobile Handsets at Best Price on Naaptol Online Shopping");

await page.waitForTimeout(2000);

});