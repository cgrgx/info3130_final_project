import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function Transfers() {
  const [fromAccount, setFromAccount] = useState("");
  const [toAccount, setToAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [frequency, setFrequency] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log({ fromAccount, toAccount, amount, frequency, date });
  };
  return (
    <>
      <Header />
      <main className="mt-16 p-2 w-full min-h-screen bg-slate-100">
        <div className="max-w-lg mx-auto p-8 bg-white rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-2xl font-bold mb-4 text-center border-b-2 pb-2">
              Pay Bills & Transfer Funds
            </h2>
            <label className="block">
              <span>From</span>
              <select
                className="form-select block w-full mt-1 border-b border-gray-600"
                value={fromAccount}
                onChange={(e) => setFromAccount(e.target.value)}
              >
                <option className="text-sm">Chequing XXXX</option>
                <option className="text-sm">Saving XXXX</option>
              </select>
            </label>

            <label className="block">
              <span>To</span>
              <select
                className="form-select block w-full mt-1 border-b border-gray-600"
                value={toAccount}
                onChange={(e) => setToAccount(e.target.value)}
              >
                <option>INTERAC e-Transfer Recipient</option>
                <option>INTERAC e-Transfer Recipient</option>
                {/* Add other options here */}
              </select>
            </label>

            <button type="button" className="text-blue-600 hover:underline">
              Add new payee?
            </button>

            <label className="block">
              <span>Amount</span>
              <div className="flex mt-1">
                <input
                  type="number"
                  className="form-input block w-full"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                />
                <select className="form-select ml-2 border-b border-gray-600">
                  <option>CAD</option>
                  <option>USD</option>
                </select>
              </div>
            </label>

            <label className="block">
              <span>How Often</span>
              <select
                className="form-select block w-full mt-1 border-b border-gray-600"
                value={frequency}
                onChange={(e) => setFrequency(e.target.value)}
              >
                <option>Once</option>
                <option>Weekly</option>
                <option>Monthly</option>
                {/* Add other frequency options here */}
              </select>
            </label>

            <label className="block">
              <span>Date</span>
              <input
                type="date"
                className="form-input block w-full mt-1"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </label>

            <div className="flex justify-between">
              <button
                type="reset"
                className="px-6 py-2 border-2 border-blue-400 rounded text-blue-600 "
              >
                Clear
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Transfers;
