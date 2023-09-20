import { Page, BrowserContext, Locator, expect } from '@playwright/test';
import { WebActions } from "../lib/WebActions";


let webActions: WebActions;

export class Timezone {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly ADD_TIMEZONE: Locator;
    readonly TIMEZONE_LABEL: Locator;
    readonly TIMEZONE_LOCATION: Locator;
    readonly TIMEZONE_SAVE_BUTTON: Locator;
    readonly TABLE_LOCAL_TIME: Locator;
    readonly TABLE_LABEL: Locator;

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        webActions = new WebActions(this.page, this.context);
        this.ADD_TIMEZONE = page.locator("[type='button']");
        this.TIMEZONE_LABEL = page.locator("[name='label']");
        this.TIMEZONE_LOCATION = page.locator("[name='timezone']");
        this.TIMEZONE_SAVE_BUTTON = page.locator("[type='submit']");

        this.TABLE_LABEL = page.locator("tbody>tr>td");
        this.TABLE_LOCAL_TIME = page.locator("tbody>tr>td:nth-child(3)");
    }

    async navigateToURL(): Promise<void> {
        await this.page.goto("https://localhost:3000");
    }

    async createNewTimeZone(label: string, timezone: string): Promise<void> {
        await this.ADD_TIMEZONE.getByText('Add timezone', { exact: true }).click();
        await this.TIMEZONE_LABEL.fill(label);
        await this.TIMEZONE_LOCATION.selectOption(timezone);
        await this.TIMEZONE_SAVE_BUTTON.click();
    }

    async validateTimezonePresent(label: string): Promise<void> {
        await expect(this.TABLE_LABEL.getByText(label, { exact: true })).toBeVisible();
    }

    async validateTimezoneNotPresent(label: string): Promise<void> {
        await expect(this.TABLE_LABEL.getByText(label, { exact: true })).toBeHidden();
    }

    async deleteCreatedTimezone(label: string): Promise<void> {
        await this.page.getByRole('button', {
            name: 'Delete , ' + label
        }).click();
    }

    async getLocalTimeValueAndValidateSorting(): Promise<void> {
        const localValues = await this.TABLE_LOCAL_TIME.allTextContents();
        const sortOrder = await this.checkSorting(localValues);
        await expect(sortOrder, "<values>  " + localValues + "  </values>").toBe(true);

    }

    async checkSorting(values: string[]): Promise<boolean> {
        let result = true;
        for (let i = 0; i < values.length; i++) {
            var aDate = new Date("1/1/2013 " + values[i]).getHours() + ':' + new Date("1/1/2013 " + values[i]).getMinutes();
            var bDate = new Date("1/1/2013 " + values[i + 1]).getHours() + ':' + new Date("1/1/2013 " + values[i]).getMinutes();
            //console.log("check dates - a: " + aDate + " b:" + bDate)
            if (aDate > bDate) {
                result = false;
                console.log("result- " + result)
                return await result;
            }
        }
        return await result;
    }

}
