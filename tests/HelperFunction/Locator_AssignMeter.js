async function fillAssignMeter(page, { }) {

    // customer
    await page.locator('#select2-getCustomer-container').click()
    await page.waitForTimeout(2000);

    await page.locator('//*[@id="select2-getCustomer-results"]/li[4]').click()
    await page.waitForTimeout(5000);

    // owner
    await page.locator('#select2-meterOwner-container').click()
    await page.waitForTimeout(2000);

    await page.locator('//*[@id="select2-meterOwner-results"]/li[6]').click()
    await page.waitForTimeout(5000);

    // save
    await page.getByRole('button', { name: 'Save' }).click();
    //await page.waitForTimeout(2000);

}
module.exports = { fillAssignMeter }