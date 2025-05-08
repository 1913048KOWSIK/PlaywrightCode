import { test, expect } from '@playwright/test';
import { devopslogin } from '../../ProjectLogin/DevOpsLogin';

test('test', async ({ page }) => {
    await devopslogin(page);

    await page.getByRole('button', { name: 'Sprint', exact: true }).click();
    await page.waitForTimeout(1000);

    await page.getByRole('link', { name: 'Sprint Plan', exact: true }).click();
    await page.waitForTimeout(1000);

  });

