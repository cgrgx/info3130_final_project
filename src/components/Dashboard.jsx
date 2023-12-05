import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

import { cards } from "./data";
import { transactions } from "./data";
import Header from "./Header";
import card from "../assets/card.png";
import Footer from "./Footer";

function Dashboard() {
  return (
    <>
      <Header />
      <main className="mt-16 w-full  bg-slate-100 min-h-screen">
        <div className=" flex flex-col md:flex-row md:justify-between">
          <div className="flex flex-col mx-3 md:flex-row md:w-2/3 md:justify-between md:items-center">
            {cards.map((card) => (
              <div
                key={card.name}
                className="h-48  mt-8 mx-4 px-4 py-2 flex flex-col justify-between bg-blue-300 shadow-md rounded-lg md:w-64"
              >
                <p className="text-2xl">{card.name}</p>
                <p className="text-3xl font-bold">{card.amount}</p>
                <p className="text-lg mb-4">December 2023</p>
              </div>
            ))}
          </div>
          <div className="h-auto mt-10 px-4 py-2 md:w-1/3 md:mt-0 ">
            <div className="bg-white shadow-lg rounded-lg p-2 ">
              <p className="text-lg">My Card</p>
              <div className="h-60 flex justify-center">
                <img src={card} alt="Visa Logo" className="h-60 " />
              </div>
              <div className="flex justify-between mb-4 px-4 text-sm">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Transfer
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Switch Card
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="h-auto mt-8 px-4 py-2">
          <div className="bg-white shadow-lg rounded-lg p-2 ">
            <p className="text-lg flex ">
              <span className="mr-4">Latest Trasactions</span>
              <Link to="/transactions">
                <GoArrowRight className="text-2xl w-20" />
              </Link>
            </p>
            <table className="w-full text-sm md:text-lg">
              <thead className="border-b-2 border-gray-600">
                <tr>
                  <th className="text-left">Transaction</th>
                  <th className="text-left">Date</th>
                  <th className="text-left">Time</th>
                  <th className="text-left">Amount</th>
                  <th className="text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr
                    key={transaction.id}
                    className="h-8 border-b border-gray-400 md:h-12"
                  >
                    <td>{transaction.transactionName}</td>
                    <td>{transaction.date}</td>
                    <td>{transaction.time}</td>
                    <td
                      className={`${
                        transaction.amount < 0
                          ? "text-red-500"
                          : "text-green-500"
                      }`}
                    >
                      ${Math.abs(transaction.amount)}
                    </td>
                    <td>{transaction.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Dashboard;
