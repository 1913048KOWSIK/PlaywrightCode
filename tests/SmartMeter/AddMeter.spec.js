import { test, expect } from '@playwright/test';
import { loginIOT } from '../ProjectLogin/SmartLogin';
import { fillCustomerField } from '../HelperFunction/Locator_CustomerCreation';
import { addMeterField } from '../HelperFunction/Locator_Addmeter';

test('test', async ({ page }) => {


    await loginIOT(page)

    await page.waitForTimeout(5000);

    await page.locator('//*[@id="menu"]/li[3]/a').click()
    await page.waitForTimeout(2000);

    await page.locator('//*[@id="meter-table"]/tbody/tr[3]/td[7]/a[1]/span').click()
    await page.waitForTimeout(4000);

    await page.locator('#addMeterReading').click()
    await page.waitForTimeout(2000);

    const previousReading = await page.locator('input#previous_reading:not([readonly])').inputValue();
    console.log('Previous Reading Value:', previousReading);

    console.log('Negative Scenario:')

    console.log('1. Without provide current reading to add meter reading')
    await addMeterField(page, {
        currentReading: '1'

    })
    await page.waitForTimeout(2000)

    await page.locator('#addMeterReading').click()
    await page.waitForTimeout(2000);

   /* console.log('1. Providing negative values in current reading to add meter reading')
    await addMeterField(page, {
        currentReading: '-2'

    })
    await page.waitForTimeout(2000)
    await page.pause()
*/
});