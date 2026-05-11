import { test, expect } from '@playwright/test';
import { Profile } from '../PageObjects/Profile';
const userName= "locked_out_user";
const password= "secret_sauce";

test.describe("Assignment on module 15", () => {
  let profile;
  test.beforeEach(async({page})=>{
    profile= new Profile(page);
    await page.goto("https://www.saucedemo.com/");
    await page.waitForLoadState("networkidle");
  })
test("Q1:Verify the error message",async({page})=>{
 await page.waitForTimeout(2000);
  await page.waitForLoadState("networkidle");
  await profile.enterName(userName);
  await page.waitForTimeout(2000);
  await profile.enterPassword(password);
  await page.waitForTimeout(2000);
  await profile.clickbutton("Login");
  await page.waitForTimeout(2000);
  await page.waitForLoadState("networkidle");
  await expect(profile.errortext).toBeVisible();
});
})


