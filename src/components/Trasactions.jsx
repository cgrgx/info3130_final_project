import { transactions } from "./data";
import Footer from "./Footer";
import Header from "./Header";

function Transactions() {
  return (
    <>
      <Header />
      <main className="mt-16 p-2 w-full min-h-screen bg-slate-100">
        <h2 className="text-xl font-medium">Transactions</h2>

        <div className="flex flex-col bg-white shadow-md px-4 py-6  md:px-6 lg:px-8  rounded-md w-full">
          <div className="flex justify-start items-center text-lg">
            <p className="mr-4 font-bold text-xl">Chequeing</p>
            <p className="mr-4">Savings</p>
            <p>Joint</p>
          </div>
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 overflow-x-scroll">
              <div className="overflow-hidden">
                <table className="w-full text-xl md:text-lg">
                  <thead className="border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-md font-medium text-gray-900  text-left sm:w-auto"
                      >
                        Transaction
                      </th>
                      <th
                        scope="col"
                        className="text-md font-medium text-gray-900  text-left sm:w-auto"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="text-md font-medium text-gray-900  text-left sm:w-auto"
                      >
                        Time
                      </th>
                      <th
                        scope="col"
                        className="text-md font-medium text-gray-900  text-left sm:w-auto"
                      >
                        Amount
                      </th>
                      <th
                        scope="col"
                        className="text-md font-medium text-gray-900  text-left sm:w-auto"
                      >
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {transactions.map((transaction, index) => (
                      <tr
                        className={` h-12 ${
                          index % 2 === 0 ? "bg-gray-100" : "bg-white"
                        }`}
                        key={transaction.id}
                      >
                        <td className=" whitespace-nowrap text-sm font-medium text-gray-900 sm:w-auto">
                          {transaction.transactionName}
                        </td>
                        <td className="text-sm text-gray-900 font-semibold  whitespace-nowrap sm:w-auto">
                          {transaction.date}
                        </td>
                        <td className="text-sm text-gray-900 font-semibold  whitespace-nowrap sm:w-auto">
                          {transaction.time}
                        </td>
                        <td
                          className={`${
                            transaction.amount < 0
                              ? "text-red-500"
                              : "text-green-500"
                          } text-sm  font-semibold  whitespace-nowrap sm:w-auto`}
                        >
                          ${Math.abs(transaction.amount)}
                        </td>
                        <td className="text-sm font-semibold text-green-600   whitespace-nowrap sm:w-auto">
                          {transaction.status}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Transactions;
