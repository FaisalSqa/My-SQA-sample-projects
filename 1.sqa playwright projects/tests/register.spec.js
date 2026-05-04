// @ts-check
import { test, expect } from '@playwright/test';
import { Profile } from '../PgaeObjects/profile';
import { faker } from '@faker-js/faker';
const email = faker.internet.email();
const fullname = faker.person.fullName();
const password = faker.internet.password();

test.describe.serial("profile page function",()=>{
  let profile;
  test.beforeEach(async({page})=>{
    profile= new Profile(page);
    await page.goto("https://demo.evershop.io/account/login");
    await page.waitForLoadState("networkidle");
    
  });

  test("validate registation with valid information",async ({page})=>{
   
    //await profile.clickAccountIcon();
    await profile.clickoncreateacclink();
    await page.waitForTimeout(5000);
    await profile.entername(fullname);
    await page.waitForTimeout(2000);
    await profile.enteremail(email);
    await page.waitForTimeout(2000);
    await profile.enterpassword(password);
    await page.waitForTimeout(2000);
    await profile.clickbutton("Sign Up");
    await page.waitForTimeout(5000);
    await page.waitForLoadState("networkidle");
    await expect(page).toHaveTitle("EverShop");
  });
  test("validate sign in",async({page})=>{
    //await profile.clickAccountIcon();
    await page.waitForTimeout(5000);
    await profile.enteremail(email);
    await page.waitForTimeout(2000);
    await profile.enterpassword(password);
    await page.waitForTimeout(2000); 
    await profile.clickbutton("Sign In");
    await page.waitForTimeout(5000);
    await page.waitForLoadState("networkidle");
    await expect(page).toHaveTitle("EverShop");
  });

   test("invalid email",async({page})=>{
    //await profile.clickAccountIcon();
    await profile.clickoncreateacclink();
    await page.waitForTimeout(5000);
    await profile.entername(fullname);
    await page.waitForTimeout(2000);
    await profile.enteremail("invalid email");
    await page.waitForTimeout(2000);
    await profile.enterpassword(password);
    await page.waitForTimeout(2000);
    await profile.clickbutton("Sign Up");
    await page.waitForTimeout(5000);
    await page.waitForLoadState("networkidle");
    await expect(profile.emailerror).toBeVisible();

  });
   test("invalid password ",async({page})=>{
    //await profile.clickAccountIcon();
    await profile.clickoncreateacclink();
    await page.waitForTimeout(5000);
    await profile.entername(fullname);
    await page.waitForTimeout(2000);
    await profile.enteremail(email);
    await page.waitForTimeout(2000);
    await profile.enterpassword("");
    await page.waitForTimeout(2000);
    await profile.clickbutton("Sign Up");
    await page.waitForTimeout(5000);
    await page.waitForLoadState("networkidle");
    await expect(profile.passworderror).toBeVisible();
  });
});

