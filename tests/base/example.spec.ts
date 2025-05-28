import { expect } from '@playwright/test';
import { test } from '../playwright-test';

test('displays word of the day and picture by definition', async ({ page }) => {
  await page.goto('/');

  const app = page.locator('.app');

  await expect(app).toHaveText('thraneen: An insignificant amount; a trifle.');
  await expect(app).toHaveAttribute('style', 'background-image: url("https://images.unsplash.com/photo-1519978556112-ef795ceec8a5?crop=entropy&cs=srgb&fm=jpg&ixid=M3wyNjA2MzJ8MHwxfHNlYXJjaHwxfHxBbiUyMGluc2lnbmlmaWNhbnQlMjBhbW91bnQlM0IlMjBhJTIwdHJpZmxlLnxlbnwwfHx8fDE3NDc4NDYyNzd8MA&ixlib=rb-4.1.0&q=85"); color: rgb(0, 0, 128);');

  await expect(app).toHaveScreenshot('plain.png');
});

test('displays word of the day and picture by word', async ({ page }) => {
  await page.goto('/');

  const app = page.locator('.app');

  await expect(app).toHaveText('apple: An insignificant amount; a trifle.');
  await expect(app).toHaveAttribute('style', 'background-image: url("https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?crop=entropy&cs=srgb&fm=jpg&ixid=M3wyNjA2MzJ8MHwxfHNlYXJjaHwxfHxhcHBsZXxlbnwwfHx8fDE3NDc4NDg4MjN8MA&ixlib=rb-4.1.0&q=85"); color: rgb(0, 208, 255);');
});

test('displays word of the day and picture by random', async ({ page }) => {
  await page.goto('/');

  const app = page.locator('.app');

  await expect(app).toHaveText('thraneen: djhfjslhdksjgddhskjgfsjsagfdhjjdssadfjhsdfgshdfgh');
  await expect(app).toHaveAttribute('style', 'background-image: url("https://images.unsplash.com/photo-1745426431524-20bcfc35021b?crop=entropy&cs=srgb&fm=jpg&ixid=M3wyNjA2MzJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDc4NDkxNzh8&ixlib=rb-4.1.0&q=85"); color: rgb(0, 0, 128);');
});

