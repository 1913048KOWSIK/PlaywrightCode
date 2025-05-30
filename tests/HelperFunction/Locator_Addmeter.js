async function addMeterField(page, { currentReading = ''}) {
    
await page.locator('#reading').nth(0).fill(currentReading) // Likely the editable one

    await page.waitForTimeout(2000)
    await page.locator('#meter-reading-add').click()

}
module.exports = { addMeterField }