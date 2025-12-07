// pages/NaaptolPage.js
export class 

HomePage {
  constructor(page) {
    this.page = page;

    // Home / listing page locators
    this.searchInput = '[name="header_search_text"]';
    this.premiumSuggestion = "//span[contains(text(),'Premium')]";

    this.cashOnDeliveryCheckbox = '[name="iscod"]';
    this.pincodeInput = "#pincode";
    this.setButton =
      '[href="javascript:void(0);"][onclick="productSearch.setPersonalisedFilter(false);"]';

    this.brandInput = "[name='brand']";
    this.brandIkallCheckbox = "[name='I KALL']";

    this.priceRangeCheckbox = "[name='1001 - 1400']";
    this.cardSlotCheckbox = "[name='Card slot']";
    this.dualSimCheckbox = "[name='Dual Sim']";

    this.sortSelect = "//select[@id='sortByFilter']";
    this.productCheckbox1 = "//input[@id='cpid12613014']";
    this.productCheckbox2 = "//input[@id='cpid12612047']";

    this.quickView = "#quickViewId2";

    this.productText =
      "4 SIM Big Battery Big Mobile with Inbuilt Powerbank Torch An";

    this.expectedTitle =
      "Online Shopping India, Shop Mobile Phone, Mens & Womens Wear, Jewellery, Home Appliances at Naaptol.com";
  }

  async goto() {
    await this.page.goto("https://www.naaptol.com/");
  }

  async searchMobileAndSelectSuggestion(itemName) {
    await this.page.click(this.searchInput);
    await this.page.type(this.searchInput, itemName, { delay: 100 });
    await this.page.locator(this.premiumSuggestion).click();
  }

  async applyFiltersAndSelectProducts(pincode) {
    // COD
    await this.page.click(this.cashOnDeliveryCheckbox);

    // Pincode
    await this.page.fill(this.pincodeInput, pincode);
    await this.page.click(this.setButton);

    // Brand
    await this.page.fill(this.brandInput, "Ikall");
    await this.page.locator(this.brandIkallCheckbox).check();

    // Other filters
    await this.page.locator(this.priceRangeCheckbox).check();
    await this.page.locator(this.cardSlotCheckbox).check();
    await this.page.locator(this.dualSimCheckbox).check();

    // Scroll up
    await this.page.keyboard.press("PageUp");

    // Sort + select products
    await this.page.locator(this.sortSelect).selectOption("Most Expensive");
    await this.page.locator(this.productCheckbox1).check();
    await this.page.locator(this.productCheckbox2).check();

    // Hover quick view
    await this.page.locator(this.quickView).hover();
    await this.page.waitForTimeout(2000);
  }

  // Opens the product in a new tab and returns that Page
  async openProductInNewTab() {
    const [newPage] = await Promise.all([
      this.page.waitForEvent("popup"),
      this.page.getByText(this.productText).click(), // click that opens new tab
    ]);

    return newPage;
  }
}
