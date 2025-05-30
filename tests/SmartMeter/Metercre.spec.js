import { test, expect } from '@playwright/test';
import { loginIOT } from '../ProjectLogin/SmartLogin';
import { fillMeterField } from '../HelperFunction/Locator_MeterCreation';
import { fillAssignMeter } from '../HelperFunction/Locator_AssignMeter';

test('test', async ({ page }) => {


    await loginIOT(page)

    await page.waitForTimeout(5000);

    await page.locator('//*[@id="menu"]/li[3]/a').click()
    await page.waitForTimeout(2000);

    await page.locator("//a[@href='https://testnuwaco.carifer.com/admin/meter/create']").click();
    await page.waitForTimeout(2000);


    console.log('Negative scenario:')

    console.log('1. Without provide any data on mandatory field to creare meter')
    await fillMeterField(page, {

        connectionType: '',
        area: '',
        zone: '',
        key: ''
    })
    await page.waitForTimeout(2000);


    console.log('2. Without select connection type to creare meter')
    await fillMeterField(page, {

        connectionType: '',
        area: '2',
        zone: 'F',
        key: '3464736'
    })
    await page.waitForTimeout(2000);


    console.log('3. Without select area to creare meter')
    await fillMeterField(page, {

        connectionType: 'Postpaid',
        area: '',
        zone: 'F',
        key: '3464736'
    })
    await page.waitForTimeout(2000);


    console.log('4. Without select zone to creare meter')
    await fillMeterField(page, {

        connectionType: 'Postpaid',
        area: '2',
        zone: '',
        key: '3464736'
    })
    await page.waitForTimeout(2000);


    console.log('5. Without select meter number to creare meter')
    await fillMeterField(page, {

        connectionType: 'Postpaid',
        area: '2',
        zone: 'F',
        key: ''
    })
    await page.waitForTimeout(2000);


    console.log('6. Checks select connection type and meter number to creare meter')
    await fillMeterField(page, {

        connectionType: 'Postpaid',
        area: '',
        zone: '',
        key: '3464736'
    })
    await page.waitForTimeout(2000);


    console.log('Positive Scenario:')

    console.log('1. Provide all data on mandatory field to creare meter')
    await fillMeterField(page, {

        connectionType: 'Postpaid',
        area: '2',
        zone: 'F',
        key: '3464736'
    })
    await page.waitForTimeout(2000);

   // await page.locator('#meterSubmit').click()
   // await page.waitForTimeout(2000);

    // customer
    await page.locator('#select2-getCustomer-container').click()
    await page.waitForTimeout(4000);

    await page.locator('//*[@id="select2-getCustomer-results"]/li[4]').click()
    await page.waitForTimeout(5000);

    // owner
    await page.locator('#select2-meterOwner-container').click()
    await page.waitForTimeout(4000);

    await page.locator('//*[@id="select2-meterOwner-results"]/li[6]').click()
    await page.waitForTimeout(5000);

    // save
    await page.getByRole('button', { name: 'Save' }).click();
    await page.pause()


});