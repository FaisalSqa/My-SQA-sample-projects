import { Browser, Builder, By, Key } from "selenium-webdriver";

const driver = new Builder().forBrowser(Browser.CHROME).build();

const firstName = "Faisal Kabir";
const lastName = "Taj";
const email = "Taj@gmail.com";
const gender = "Male";
const mobileNumber = "1234567890";
const hobbies = ["Sports", "Music"];
const subject = "Computer Science";
const month = "February";
const day = "20";
const year = "2000";
const address= "kalyanpur notun bazar";

async function testRunner() {
  await driver.get("https://demoqa.com/");
  await driver.manage().window().maximize();

  await driver.findElement(By.xpath("//h5[text()='Forms']")).click();
  await driver.sleep(2000);
  await driver.findElement(By.xpath("//a[contains(@href,'practice-form')]")).click();

  await driver.sleep(2000);

  await driver.findElement(By.id("firstName")).sendKeys(firstName);
  await driver.findElement(By.id("lastName")).sendKeys(lastName);
  await driver.findElement(By.id("userEmail")).sendKeys(email);
  await driver.findElement(By.xpath(`//label[text()='${gender}']`)).click();
  await driver.findElement(By.id("userNumber")).sendKeys(mobileNumber);

  await driver.findElement(By.id("dateOfBirthInput")).click();
  await driver.findElement(By.className("react-datepicker__month-select")).sendKeys(month);
  await driver.findElement(By.className("react-datepicker__year-select")).sendKeys(year);
  await driver.findElement(By.xpath(`//div[contains(@aria-label,'${month}') and text()='${day}']`)).click();

  await driver.findElement(By.id("subjectsInput")).sendKeys(subject);
  await driver.sleep(1000);
  await driver.findElement(By.id("subjectsInput")).sendKeys(Key.ENTER);

  for (let i = 0; i < hobbies.length; i++) {
    await driver
      .findElement(By.xpath(`//label[text()='${hobbies[i]}']`))
      .click();
    await driver.sleep(1000);
  }
  await driver.sleep(1000);
  await driver.findElement(By.id("uploadPicture")).sendKeys("L:\\friend.png");
  await driver.sleep(1000);
  await driver.findElement(By.id("currentAddress")).sendKeys(address);
  await driver.sleep(1000);

  await driver.findElement(By.id("state")).click();
  await driver.findElement(By.xpath("//div[text()='Uttar Pradesh']")).click();
  await driver.sleep(1000);

  await driver.findElement(By.id("city")).click();
  await driver.findElement(By.xpath("//div[text()='Lucknow']")).click();
  await driver.sleep(1000);

  await driver.findElement(By.id("submit")).click();


  await driver.quit();
}

testRunner();