'use client';

import { useState } from 'react';
import IncomeForm from '../components/IncomeForm';

export default function Home() {
  const [monthlyIncome, setMonthlyIncome] = useState<number | null>(null);

  const handleIncomeSubmit = (income: number) => {
    setMonthlyIncome(income);
  };

  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center text-gray-900">
          Micro-Budget Advisor
        </h1>
        
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Monthly Income</h2>
          <IncomeForm onSubmit={handleIncomeSubmit} />
        </div>

        {monthlyIncome && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-green-700">
              Monthly income set to: ${monthlyIncome.toLocaleString()}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
