// tests/naaptol.spec.js
import { test, expect } from "@playwright/test";
import { HomePage } from "../Pages/HomePage";
import { SearchedItemPage } from "../Pages/SearchedItemPage";

test("Naaptol flow with POM", async ({ page }) => {
  const naaptol = new HomePage(page);

  await naaptol.goto();
  await naaptol.searchMobileAndSelectSuggestion("mobile");
  await naaptol.applyFiltersAndSelectProducts("400011");

  // Open product in new tab (popup)
  const productPageHandle = await naaptol.openProductInNewTab();

  const productDetails = new SearchedItemPage(productPageHandle);

  await productDetails.fillPincodeSelectColorAndBuy("110076");
  await productDetails.goToHomePageFromLogo();

  // After clicking logo, we are on the popup tab (productPageHandle)
  await expect(productPageHandle).toHaveTitle(naaptol.expectedTitle);

  await productPageHandle.waitForTimeout(2000);
});
