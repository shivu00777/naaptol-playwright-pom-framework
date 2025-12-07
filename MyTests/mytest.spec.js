import {test, expect} from "@playwright/test";

test("nopCommerce Project",async({page})=>{

// Open the URL    
await page.goto("https://www.demoblaze.com/");

// Validate the title of page
await expect(page).toHaveTitle("STORE");

// Print the title
console.log(await page.title());

// Login Button
await page.locator("#login2").click();

// Fill data in username placeholder
await page.locator("#loginusername").fill("shivam211199");

// Fill data in Password placeholder
await page.fill("#loginpassword","Shivam@123");

// click on Login Bitton
await page.locator("//button[normalize-space()='Log in']").click();


// click on laptop
await page.getByText("Laptops").click();


// click on Sony Laptop
await page.getByText("Sony vaio i7").click();


// check selected laptop available or not in page

const laptop=page.getByText("Sony vaio i7");
await expect(laptop).toBeVisible();


// Add to cart
await page.getByText('Add to cart').click();

// Click on cart
await page.click("#cartur");


// click on place order
await page.click('[data-target="#orderModal"]');

// check total amount should be 790 for i laptop
const value = await page.locator("#totalm").textContent();
expect(value.trim()).toEqual("Total:");
console.log(value);


// Add data in name placeholder
await page.fill('#name',"shivam");

// Add data in country placeholder
await page.fill("#country","India");

// Add data in city placeholder
await page.fill('#city',"Delhi");

// Add card details
await page.locator('#card').fill("5105 1051 0510 5100");

// Add Month Details
await page.locator("#month").fill("November");

// Add Year Details
await page.fill("#year","2025");


// click on Purchase Button
await page.getByText('Purchase').click();

await page.waitForTimeout(3000);

// Get text for assertion
await expect(page.getByText('Thank you for your purchase!'))
    .toHaveText("Thank you for your purchase!");

// prints the text
const message = await page.getByText('Thank you for your purchase!').innerText();
console.log(message);  

// Click on ohk button
await page.click('[tabindex="1"]');


// Verify Home page
 expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();


 // Printing home page text
const homepage = await page.locator('#nava').innerText();

// writing the Home page message
console.log("You are on Home Page"+" "+homepage);

// Pause the Script
await page.waitForTimeout(3000);

});