import { test, expect } from '@playwright/test';

test('homepage has correct title and content', async ({ page }) => {
  await page.goto('/');

  // Check page title
  await expect(page).toHaveTitle(/Micro-Budget Advisor/);

  // Check main heading
  const heading = page.getByRole('heading', { name: 'Micro-Budget Advisor', level: 1 });
  await expect(heading).toBeVisible();

  // Check income section
  const incomeHeading = page.getByRole('heading', { name: 'Monthly Income', level: 2 });
  await expect(incomeHeading).toBeVisible();

  // Check income form is present
  const incomeInput = page.getByTestId('income-input');
  await expect(incomeInput).toBeVisible();

  // Check submit button is present
  const submitButton = page.getByTestId('income-submit');
  await expect(submitButton).toBeVisible();
});
