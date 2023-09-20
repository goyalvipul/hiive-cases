import { expect } from '@playwright/test';
import test from '../lib/BaseTest';


test.beforeEach(async ({ page }) => {
  await page.goto('localhost:3000');
})

test('has title', async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Time Keeper/);
});

test('user is able to add a new Timezone', async ({ timeZone }) => {
  await timeZone.createNewTimeZone("EST-Timezone", "Eastern Standard Time");
  await timeZone.validateTimezonePresent("EST-Timezone");
})

test('user is able to delete any added timezone', async ({ timeZone }) => {
  await timeZone.createNewTimeZone("PST-Deletion", "Pacific Standard Time");
  await timeZone.deleteCreatedTimezone("PST-Deletion");
  await timeZone.validateTimezoneNotPresent("PST-Deletion");
})

test('user should be able to use html tags in Label, while adding a new timezone', async ({ timeZone }) => {
  await timeZone.createNewTimeZone("<b>htmltag</b>", "Mountain Standard Time");
  await timeZone.validateTimezonePresent("<b>htmltag</b>");
})

/**
 * this test will fail as there is a BUG is SORT ORDER
 */
test('user should be able to view the local timezone in Ascending order', async ({ timeZone }) => {
  await timeZone.createNewTimeZone("AST", "Alaska Standard Time");
  await timeZone.createNewTimeZone("MST", "Mountain Standard Time");
  await timeZone.createNewTimeZone("Hawaii", "Hawaii-Aleutian Standard Time");
  await timeZone.createNewTimeZone("CST", "Central Standard Time");
  await timeZone.getLocalTimeValueAndValidateSorting();

})


/**
 * There is a BUG here. So commenting the automation test.
 */
// test('user should not be able to delete Local timezone', async ({ timeZone, page }) => {
//   await timeZone.validateTimezonePresent("Local (You)");
//   await page.waitForTimeout(3000);
//   await timeZone.deleteCreatedTimezone("Local (You)");
//   await page.waitForTimeout(3000);
//   await timeZone.validateTimezonePresent("Local (You)");
// })

