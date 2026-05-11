# SQA Projects Repository

## Overview

This repository contains my Software Quality Assurance (SQA) practice projects covering UI automation, API testing, and manual testing.

---

## Projects Included

### 1. Playwright Automation

* Automated **registration page testing**
* Covers UI interactions, form validation, and end-to-end flows
* Built using Playwright framework

📁 Folder: `playwright-projects`

---

### 2. Selenium Automation

* Automated **form fill-up page testing**
* Demonstrates element handling, page interactions, and test execution
* Implemented using Selenium with JavaScript

📁 Folder: `selenium-projects`

---

### 3. Postman API Testing & Manual Test Cases

* Automated **API testing using Postman**
* Includes:

  * API collections
  * Environment configurations
  * Manual test cases documentation

📁 Folder: `postman-test-cases`

---

### 4. Advanced Playwright Project

This project contains three automation scenarios for the SauceDemo application.

#### Q1
Try logging in with `locked_out_user` and verify the error message.

#### Q2
Log in with `standard_user`. Then, from the hamburger menu, reset the App State. Add any three items to the cart. Navigate to the final checkout page and verify the product name and total price. Finish the purchase journey and verify the successful order message. Then, reset the App State again and log out.

#### Q3
Log in with `performance_glitch_user` and reset the App State. Then filter by name (Z to A) and select the first product into the cart. Then navigate up to the final checkout page and verify all the products' names and the total price. Then finish the purchase journey and verify the successful order message. Then, reset the App State again and log out.

### How to Run

First go to the `Q1_Q2_Q3` folder:

```bash
cd Q1_Q2_Q3
```

Run Q1:

```bash
npm run q1
```

Run Q2:

```bash
npm run q2
```

Run Q3:

```bash
npm run q3
```

Run all tests together:

```bash
npm run all
```

After running any test, open the HTML report to view the result.

📁 Folder: `Q1_Q2_Q3`

---

### 5. Advanced Postman Project

This project contains API testing scenarios with authentication and validation checks.

#### Login
Login with registered credentials and capture `authToken`.

#### Q4
GET user by `userId` and verify name and email match.

#### Q5
PUT updated profile and verify the `updatedAt` timestamp.

#### Q6
PATCH a single field and verify only that field changed.

#### Q8
Execute bad requests using stored data and assert 4xx errors.

### How to Run Postman Collection with Newman

Current directory must be at `Assignment_module_15`.

Run the collection using this command:

```bash
newman run "Assignment module 15.postman_collection.json"
```

📁 Folder: `Assignment_module_15`

---

## Tech Stack

* Playwright
* Postman
* Newman
* Node.js
* Selenium WebDriver
* JavaScript

---

## Author

Faisal Kabir Taj
