import { test, expect } from '@playwright/test';
import { loginIOT } from '../ProjectLogin/SmartLogin';
import { fillCustomerField } from '../HelperFunction/Locator_CustomerCreation';

test('test', async ({ page }) => {


    await loginIOT(page)

    await page.waitForTimeout(5000);

    await page.locator('//*[@id="menu"]/li[2]/a').click()
    await page.waitForTimeout(2000);

    await page.waitForLoadState('load')
    await page.waitForTimeout(5000);

    await page.locator("//a[@href='https://testnuwaco.carifer.com/admin/customer/create']").click();
    await page.waitForTimeout(2000);

    console.log('Negative scenario:')
    console.log('1. Without select group to create customer')
    await fillCustomerField(page, {

        group: '',
        Firstname: 'Surya',
        Secondname: 'kumar',
        Thirdname: 'yadhav',
        Fourthname: 'G',
        phone: '7854123695',
        address1: 'Mumbai',
        address2: 'Bombay'

    })
    await page.waitForTimeout(2000)

    console.log('2. Without enter firstname to create customer')
    await fillCustomerField(page, {

        group: 'zero',
        Firstname: '',
        Secondname: 'kumar',
        Thirdname: 'yadhav',
        Fourthname: 'G',
        phone: '7854123695',
        address1: 'Mumbai',
        address2: 'Bombay'

    })
    await page.waitForTimeout(2000)


    console.log('3. Without enter second name to create customer')
    await fillCustomerField(page, {

        group: 'zero',
        Firstname: 'surya',
        Secondname: '',
        Thirdname: 'yadhav',
        Fourthname: 'G',
        phone: '7854123695',
        address1: 'Mumbai',
        address2: 'Bombay'

    })
    await page.waitForTimeout(2000)


    console.log('4. Without enter third name to create customer')
    await fillCustomerField(page, {

        group: 'zero',
        Firstname: 'surya',
        Secondname: 'kumar',
        Thirdname: '',
        Fourthname: 'G',
        phone: '7854123695',
        address1: 'Mumbai',
        address2: 'Bombay'

    })
    await page.waitForTimeout(2000)



    console.log('5. Without enter fourth name to create customer')
    await fillCustomerField(page, {

        group: 'zero',
        Firstname: 'surya',
        Secondname: 'kumar',
        Thirdname: 'yadhav',
        Fourthname: '',
        phone: '7854123695',
        address1: 'Mumbai',
        address2: 'Bombay'

    })
    await page.waitForTimeout(2000)



    console.log('6. Without enter phone number to create customer')
    await fillCustomerField(page, {

        group: 'zero',
        Firstname: 'surya',
        Secondname: 'kumar',
        Thirdname: 'yadhav',
        Fourthname: 'G',
        phone: '',
        address1: 'Mumbai',
        address2: 'Bombay'

    })
    await page.waitForTimeout(2000)


    console.log('7. Without enter address1 to create customer')
    await fillCustomerField(page, {

        group: 'zero',
        Firstname: 'surya',
        Secondname: 'kumar',
        Thirdname: 'yadhav',
        Fourthname: 'G',
        phone: '7854123695',
        address1: '',
        address2: 'Bombay'

    })
    await page.waitForTimeout(2000)


    console.log('8. Without enter address2 to create customer')
    await fillCustomerField(page, {

        group: 'zero',
        Firstname: 'surya',
        Secondname: 'kumar',
        Thirdname: 'yadhav',
        Fourthname: 'G',
        phone: '7854123695',
        address1: 'Mumbai',
        address2: ''

    })
    await page.waitForTimeout(2000)


    console.log('9. Without provide mandatory field to create customer')
    await fillCustomerField(page, {

        group: '',
        Firstname: '',
        Secondname: '',
        Thirdname: '',
        Fourthname: '',
        phone: '',
        address1: '',
        address2: ''

    })
    await page.waitForTimeout(2000)


    console.log('Positive Scenario:')

    console.log('1. Provide all data on mandatory field to create new customer')
    await fillCustomerField(page, {

        group: 'zero',
        Firstname: 'Surya',
        Secondname: 'kumar',
        Thirdname: 'yadhav',
        Fourthname: 'G',
        phone: '7854123695',
        address1: 'Mumbai',
        address2: 'Bombay'

    })
    await page.waitForTimeout(5000)

});