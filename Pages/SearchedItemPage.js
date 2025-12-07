// pages/ProductDetailsPage.js
export class SearchedItemPage {
  constructor(page) {
    this.page = page;
    this.deliveryPincodeInput = "#pincodeDeliveryId_0";
    this.buyButton = ".button_1";
    this.logoLink = "div[class='clearfix'] ul[class='logo'] a";
  }

  async fillPincodeSelectColorAndBuy(pincode) {
    await this.page.waitForSelector(this.deliveryPincodeInput, {
      state: "visible",
    });

    await this.page.locator(this.deliveryPincodeInput).fill(pincode);

    await this.page.getByText("Black-Blue", { exact: true }).click();

    await this.page.locator(this.buyButton).click();
    await this.page.waitForTimeout(2000);
  }

  async goToHomePageFromLogo() {
    await this.page.locator(this.logoLink).click();
  }
}
