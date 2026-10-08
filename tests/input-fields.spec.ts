import { test, expect } from '@playwright/test';

test.beforeEach( async({page}) => {
  await page.goto('/')
})

test('Update pet type', async ({page}) => {
  await page.getByRole('link', { name: 'Pet Types' }).click();
  await expect(page.getByRole('heading', { name: 'Pet Types' })).toBeVisible();

  await page.getByRole('button', { name: 'Edit' }).first().click();

  // Wait for the current pet type value to be loaded before updating it
  await expect(page.locator('#name')).not.toHaveValue('');
  await page.locator('#name').fill('rabbit');
  await page.getByRole('button', { name: 'Update' }).click();
 
  await expect(page.getByRole('heading', { name: 'Pet Types' })).toBeVisible();
  await expect(page.locator('[id="0"]')).toHaveValue('rabbit');


  await page.getByRole('button', { name: 'Edit' }).first().click();

  // Wait for the current pet type value to be loaded before updating it
  await expect(page.locator('#name')).not.toHaveValue('');
  await page.locator('#name').fill('cat');
  await page.getByRole('button', { name: 'Update' }).click();

  await expect(page.locator('[id="0"]')).toHaveValue('cat');

});
