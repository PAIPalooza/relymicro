export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">
        Micro-Budget Advisor
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        <section 
          data-testid="income-section"
          className="p-6 bg-white rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4">Income</h2>
          <p className="text-gray-600">Track your monthly income</p>
        </section>

        <section 
          data-testid="expenses-section"
          className="p-6 bg-white rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4">Expenses</h2>
          <p className="text-gray-600">Manage your expenses</p>
        </section>

        <section 
          data-testid="savings-section"
          className="p-6 bg-white rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4">Savings</h2>
          <p className="text-gray-600">Set and track savings goals</p>
        </section>
      </div>
    </main>
  );
}
