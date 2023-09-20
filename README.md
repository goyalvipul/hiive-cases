# hiive-cases

**Assumption/ Observations:**
1. There are some console errors shown while I open the Application. Ignoring them, assuming they are related to some setup issues. 

**Test Scenarios:**

Functional Test Cases:
1. User should be able to create a new Timezone.                                                       |   (Automated)
2. User should not be able to create a timezone wihout mentioning the Label and Location fields.       |   (Automated)
3. When a new timezone is added, it should be visible in the table listing.                            |   (Automated)
4. When a new timezone is added, sort order should be based on the Local time.                         |   (Automated) |  Failing because of BUG
5. User should be able to delete any newly added timezone                                              |   (Automated)
6. User should not be able to able to delete the Local timezone                                        |   (Automated) | Commented as creating hinderence and Failing due to Bug
7. User should be able to see respective local time for selected timezone


GUI Test Cases:
1. User should be able to add anything in the Label field - Special Characters, HTML Tags, Script Tags  | (Automated)

Day Light Saving:
1. When selected date post Nov 10, 2023, Daylight saving is set, which should also show correct time


**Framework Modified:**
![image](https://github.com/goyalvipul/hiive-cases/assets/1950651/f4a2693e-e474-49b5-8d9d-2fbf908da38f)

1. lib - contains all the libraries and utilities
   -- BaseTest.ts : Main WebActions and PageObjects are extended so they can easily be refered in the test files.
   -- WeAction.ts : Tried collating all the interactions like click, type on the same file, which can be refered in test files. This helps when we implement listeners for better debugging
2. pageRepository - contains timezone page getters, setters and Locators.
3. tests - contain all the test files.

**Execution Result:**
![image](https://github.com/goyalvipul/hiive-cases/assets/1950651/4ae0a897-0225-48fe-ac54-27d76bfddbde)
