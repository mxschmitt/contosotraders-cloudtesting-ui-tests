import { test, expect } from '@playwright/test';

test(`should be able to use discount code DISCOUNT15`, async ({ page }) => {
    await page.goto(`/product/detail/1`);
    await page.getByRole('button', { name: 'Add To Bag' }).click();
    await page.getByRole('button', { name: 'cart' }).click();

    const code = 'DISCOUNT15';
    const discountInPercentage = code.replace('DISCOUNT', '');
    
    await page.getByPlaceholder('Enter coupon code').fill(code);
    await page.getByRole('button', { name: 'CHECK' }).click();
    await expect(page.getByRole('button', { name: code })).toBeVisible();
    // check that correct discount is applied
    await expect(page.getByTestId('discount')).toHaveText(`-$${discountInPercentage}.00`);
});
