export default class Basepage{
    constructor(page){
        this.page=page;
    }
   buttonLocator(button){
   return this.page.getByRole("button",{name:button});
   }
   async clickbutton(button){
    await this.buttonLocator(button).click();
   }
}