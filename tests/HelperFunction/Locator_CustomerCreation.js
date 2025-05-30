async function fillCustomerField(page, { group ='', Firstname = '', Secondname = '', Thirdname = '',
     Fourthname = '', phone = '', address1 = '', address2 = ''}) {
    
    await page.locator('#customer_group').selectOption(group);
    await page.locator('#first_name').fill(Firstname);
    await page.locator('#second_name').fill(Secondname)
    await page.locator('#third_name').fill(Thirdname)
    await page.locator('#fourth_name').fill(Fourthname)
    await page.locator('#phone').fill(phone)
    await page.locator('#address_line1').fill(address1);
    await page.locator('#address_line2').fill(address2)

    await page.waitForTimeout(2000);
    await page.locator('//*[@id="customer-form"]/div[5]/button').click();

}
module.exports = { fillCustomerField };