import Basepage from "./basePage";

export class Profile extends Basepage {
    constructor(page){
        super(page);
        this.userName = this.page.getByRole("textbox", { name: "Username" });
        this.password = this.page.getByRole("textbox", { name: "Password" })
        this.errortext= this.page.getByText("Epic sadface: Sorry, this user has been locked out.");
        this.i1text= this.page.getByText("Sauce Labs Backpack", { exact: true });
        this.i2text= this.page.getByText("Sauce Labs Bolt T-Shirt", { exact: true });
        this.i3text= this.page.getByText("Sauce Labs Bike Light", { exact: true });
        this.ptext= this.page.getByText("Total: $60.45", { exact: true });
        this.ctext= this.page.getByText("Thank you for your order!", { exact: true });
        this.resetApp= this.page.locator('[data-test="reset-sidebar-link"]');
        this.backpack= this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.shirt= this.page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
        this.bike= this.page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
        this.cart= this.page.locator('[data-test="shopping-cart-link"]');
        this.checkout=this.page.locator('[data-test="checkout"]');
        this.Fname=this.page.locator('[data-test="firstName"]');
        this.Lname=this.page.locator('[data-test="lastName"]');
        this.postal=this.page.locator('[data-test="postalCode"]');
        this.continue=this.page.locator('[data-test="continue"]');
        this.finish=this.page.locator('[data-test="finish"]');
        this.home=this.page.locator('[data-test="back-to-products"]');
        this.logout=this.page.locator('[data-test="logout-sidebar-link"]');
        
        
        
        this.sort=this.page.locator('[data-test="product-sort-container"]');
        this.sortselect = this.page.locator('select');
        this.Q3shirt=this.page.locator('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]');
        this.Q3itext= this.page.getByText("Test.allTheThings() T-Shirt (Red)", { exact: true });
        this.Q3ptext= this.page.getByText("Total: $17.27", { exact: true });
    }
    async enterName(fullName){
    await this.userName.fill(fullName);
}
    async enterPassword(password){
    await this.password.fill(password);
}
    async clickReset(){
    await this.resetApp.click();
    }
    async item1(){
    await this.backpack.click();
    }
    async item2(){
    await this.shirt.click();
    }
    async item3(){
    await this.bike.click();
    }
    async clickCart(){
    await this.cart.click();
    }
    async clickCheckout(){
    await this.checkout.click();
    }
    async enterFname(Fn){
    await this.Fname.fill(Fn);
    }
    async enterLname(Ln){
    await this.Lname.fill(Ln);
    }
    async enterpostal(postal){
    await this.postal.fill(postal);
    }
    async clickcontinue(){
    await this.continue.click();
    }
    async clickfinish(){
    await this.finish.click();
    }
    async clickhome(){
    await this.home.click();
    }
    async clicklogout(){
    await this.logout.click();
    }
    async clicksort(){
    await this.sort.click();
    }
    async clickza(option){
    await this.sortselect.selectOption(option);
    }
    async Q3s(){
    await this.Q3shirt.click();
    }
};


