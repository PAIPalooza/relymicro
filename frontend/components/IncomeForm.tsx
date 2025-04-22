import { useState, useEffect } from 'react';

interface IncomeFormProps {
  onSubmit: (income: number) => void;
}

export default function IncomeForm({ onSubmit }: IncomeFormProps) {
  const [income, setIncome] = useState<string>('');
  const [error, setError] = useState<string>('');

  // Load saved income from local storage
  useEffect(() => {
    const savedData = localStorage.getItem('budgetData');
    if (savedData) {
      const data = JSON.parse(savedData);
      if (data.monthlyIncome) {
        setIncome(data.monthlyIncome.toString());
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Remove commas and convert to number
    const numericIncome = Number(income.replace(/,/g, ''));
    
    if (isNaN(numericIncome) || numericIncome <= 0) {
      setError('Please enter a valid income amount');
      return;
    }

    // Save to local storage
    const existingData = localStorage.getItem('budgetData');
    const data = existingData ? JSON.parse(existingData) : {};
    data.monthlyIncome = numericIncome;
    localStorage.setItem('budgetData', JSON.stringify(data));

    onSubmit(numericIncome);
    setError('');
  };

  const handleIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setIncome(value);
    if (value) {
      setError('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="income" className="block text-sm font-medium text-gray-700">
          Monthly Income
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">$</span>
          </div>
          <input
            type="text"
            name="income"
            id="income"
            data-testid="income-input"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
            placeholder="0"
            value={income}
            onChange={handleIncomeChange}
            inputMode="numeric"
            pattern="[0-9]*"
          />
        </div>
        {error && (
          <p className="mt-2 text-sm text-red-600" data-testid="income-error">
            {error}
          </p>
        )}
      </div>
      <button
        type="submit"
        data-testid="income-submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Save Income
      </button>
    </form>
  );
}
