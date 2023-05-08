import { test, expect } from '@playwright/test';
import path from 'path';

const imgPath = path.join(__dirname, 'assets/product_image.png');

test.describe('File Upload', () => {
  test('should be able to upload a file', async ({ page }) => {
    await page.goto("/");
    await page.getByRole('button', { name: 'iconimage' }).click();
    await page.locator('input[type="file"]').setInputFiles(imgPath);
    await expect(page).toHaveURL('/suggested-products-list');
  });
});