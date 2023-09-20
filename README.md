# hiive-cases

<h1>Assumption/ Observations:</h1>
1. There are some console errors shown while I open the Application. Ignoring them, assuming they are related to some setup issues. 
<br/><br/>
<h1>Test Scenarios:</h1>

<h3>Functional Test Cases:</h3>
1. User should be able to create a new Timezone.                                                       |   (Automated)
2. User should not be able to create a timezone wihout mentioning the Label and Location fields.       |   (Automated)
3. When a new timezone is added, it should be visible in the table listing.                            |   (Automated)
4. When a new timezone is added, sort order should be based on the Local time.                         |   (Automated) |  Failing because of BUG
5. User should be able to delete any newly added timezone                                              |   (Automated)
6. User should not be able to able to delete the Local timezone                                        |   (Automated) | Commented as creating hinderence and Failing due to Bug
7. User should be able to see respective local time for selected timezone


<h3>GUI Test Cases:</h3>
1. User should be able to add anything in the Label field - Special Characters, HTML Tags, Script Tags  | (Automated)

<h3>Day Light Saving:</h3>
1. When selected date post Nov 10, 2023, Daylight saving is set, which should also show correct time


<h3>Framework Modified:</h3>
![Screenshot 2023-09-19 at 9 00 19 PM](https://github.com/goyalvipul/hiive-cases/assets/1950651/fe607665-a2ad-4294-a1d9-f429a347da25)

<br/>
1. lib: <nbsp> contains all the libraries and utilities
    <br/> -- BaseTest.ts : Main WebActions and PageObjects are extended so they can easily be refered in the test files.
     <br/>-- WeAction.ts : Tried collating all the interactions like click, type on the same file, which can be refered in test files. This helps when we implement listeners for better debugging
2. pageRepository : <nbsp> contains timezone page getters, setters and Locators.
3. tests : <nbsp> contain all the test files.

**Execution Result:** <br/>
![image](https://github.com/goyalvipul/hiive-cases/assets/1950651/4ae0a897-0225-48fe-ac54-27d76bfddbde)
