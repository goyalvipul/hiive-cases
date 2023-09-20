import { test as baseTest } from '@playwright/test';
import { Timezone } from '../pageRepository/Timezone';
import { WebActions } from '../lib/WebActions';

const test = baseTest.extend<{
    webActions: WebActions;
    timeZone: Timezone;
}>({
    webActions: async ({ page, context }, use) => {
        await use(new WebActions(page, context));
    },
    timeZone: async ({ page, context }, use) => {
        await use(new Timezone(page, context));
    },
})

export default test;
