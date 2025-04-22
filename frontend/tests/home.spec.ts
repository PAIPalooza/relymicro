import { test, expect } from '@playwright/test';

test('homepage has correct title and content', async ({ page }) => {
  await page.goto('/');
  
  // Check page title
  await expect(page).toHaveTitle(/Micro-Budget Advisor/);
  
  // Check for main heading
  const heading = page.getByRole('heading', { level: 1 });
  await expect(heading).toContainText('Micro-Budget Advisor');
  
  // Check for key sections
  await expect(page.getByTestId('income-section')).toBeVisible();
  await expect(page.getByTestId('expenses-section')).toBeVisible();
  await expect(page.getByTestId('savings-section')).toBeVisible();
});
