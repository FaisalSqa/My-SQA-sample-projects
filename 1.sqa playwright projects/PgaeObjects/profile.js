import Basepage from "./basePage";
export class Profile extends Basepage{
    constructor(page){
        super(page);
        this.accountIcon = this.page.locator("//a[contains(@href,'account')]");
        this.createAccLink= this.page.getByRole("link",{name:"Create an account"});
        this.fullnameinput=this.page.getByRole("textbox",{name:"Full Name"});
        this.emaiinput=this.page.getByRole("textbox",{name:"Email"});
        this.password=this.page.getByRole("textbox",{name:"Password"});
        this.emailerror= this.page.getByText("Please enter a valid email address");
        this.passworderror= this.page.getByText("Password is required");
        
    }
async clickAccountIcon(){
    await this.accountIcon.click();
}
async clickoncreateacclink(){
    await this.createAccLink.click();
}
async entername(fullname){
    await this.fullnameinput.fill(fullname);
}
async enteremail(email){
    await this.emaiinput.fill(email);
}
async enterpassword(password){
    await this.password.fill(password);
}

}
