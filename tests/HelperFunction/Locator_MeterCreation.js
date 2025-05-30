async function fillMeterField(page, { connectionType = '', area = '', zone = '', key = ''}) {

    await page.locator('#connection_type').selectOption(connectionType)
    await page.locator('#area').selectOption(area)
    await page.locator('#zone').selectOption(zone)
    await page.locator('#key').fill(key)

    await page.waitForTimeout(1000);
    await page.locator('#meterSubmit').click()

}
module.exports = { fillMeterField };