import { test, expect } from '@playwright/test';
import { Profile } from '../PageObjects/Profile';
const userName= "standard_user";
const password= "secret_sauce";
const fname="faisal";
const lname="taj"
const postal="dhaka medical college, 1000, Dhaka"

test.describe("Assignment on module 15", () => {
  let profile;
  test.beforeEach(async({page})=>{
    profile= new Profile(page);
    await page.goto("https://www.saucedemo.com/");
    await page.waitForLoadState("networkidle");
  })
test("Q2:Log in with standard_user",async({page})=>{
 await page.waitForTimeout(2000);
  await page.waitForLoadState("networkidle");
  await profile.enterName(userName);
  await page.waitForTimeout(2000);
  await profile.enterPassword(password);
  await page.waitForTimeout(2000);
  await profile.clickbutton("Login");
  await page.waitForTimeout(2000);
  await page.waitForLoadState("networkidle");
  await profile.clickbutton("Open Menu");
  await page.waitForTimeout(2000);
  await page.waitForLoadState("networkidle");
  await profile.clickReset();
  await page.waitForTimeout(2000);
  await profile.item1();
  await page.waitForTimeout(2000);
  await profile.item2();
  await page.waitForTimeout(2000);
  await profile.item3();
  await page.waitForTimeout(2000);
  await page.waitForLoadState("networkidle");
  await profile.clickCart();
  await page.waitForTimeout(2000);
  await page.waitForLoadState("networkidle");
  await profile.clickCheckout();
  await page.waitForTimeout(2000);
  await page.waitForLoadState("networkidle");
  await profile.enterFname(fname);
  await page.waitForTimeout(2000);
  await profile.enterLname(lname);
  await page.waitForTimeout(2000);
  await profile.enterpostal(postal);
  await page.waitForTimeout(2000);
  await page.waitForLoadState("networkidle");
  await profile.clickcontinue();
  await page.waitForTimeout(2000);
  await page.waitForLoadState("networkidle");
  await expect(profile.i1text).toBeVisible();
  await page.waitForTimeout(1000);
  await expect(profile.i2text).toBeVisible();
  await page.waitForTimeout(1000);
  await expect(profile.i3text).toBeVisible();
  await page.waitForTimeout(1000);
  await expect(profile.ptext).toBeVisible();
  await page.waitForTimeout(1000);
  await profile.clickfinish();
  await page.waitForTimeout(2000);
  await page.waitForLoadState("networkidle");
  await expect(profile.ctext).toBeVisible();
  await page.waitForTimeout(2000);
  await profile.clickhome();
  await page.waitForTimeout(2000);
  await page.waitForLoadState("networkidle");
  await profile.clickbutton("Open Menu");
  await page.waitForTimeout(2000);
  await profile.clickReset();
  await page.waitForTimeout(2000);
  await profile.clicklogout();
  await page.waitForTimeout(2000);
  await page.waitForLoadState("networkidle");
});
})


