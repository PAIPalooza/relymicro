import { test, expect } from '@playwright/test';

test.describe('Income Form', () => {
  test('should allow user to input monthly income', async ({ page }) => {
    await page.goto('/');
    
    // Find the income input field
    const incomeInput = page.getByTestId('income-input');
    await expect(incomeInput).toBeVisible();
    
    // Test input validation
    await incomeInput.fill('abc');
    await expect(incomeInput).toHaveValue('');
    
    // Test valid input
    await incomeInput.fill('5000');
    await expect(incomeInput).toHaveValue('5000');
    
    // Test form submission
    await page.getByTestId('income-submit').click();
    await expect(page.getByText('Monthly income set to: $5,000')).toBeVisible();
  });

  test('should persist income data to local storage', async ({ page }) => {
    await page.goto('/');
    
    // Input income
    const incomeInput = page.getByTestId('income-input');
    await incomeInput.fill('5000');
    
    // Submit form
    await page.getByTestId('income-submit').click();
    
    // Verify local storage
    const localStorageData = await page.evaluate(() => {
      return localStorage.getItem('budgetData');
    });
    
    expect(localStorageData).toBeTruthy();
    const data = JSON.parse(localStorageData || '{}');
    expect(data.monthlyIncome).toBe(5000);
  });
});
