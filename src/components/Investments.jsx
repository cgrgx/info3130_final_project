import { IoIosTrendingUp } from "react-icons/io";
import { IoIosTrendingDown } from "react-icons/io";

import { portfolioData } from "./data";
import Header from "./Header";
import Footer from "./Footer";

function Investments() {
  return (
    <>
      <Header />
      <main className="mt-16 p-4 w-full min-h-screen bg-slate-100">
        <div className="flex flex-col items-center justify-center ">
          <div className="bg-blue-200 p-4 rounded-lg shadow-md w-full md:max-w-lg md:flex md:justify-around md:h-40">
            <div className="flex flex-col justify-center ">
              <div className="flex justify-between items-center mb-4">
                <div className="text-lg font-semibold">Total Investment</div>
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-4">
                $12,350.32
              </div>
            </div>
            <div className="flex justify-between items-center md:flex-col md:justify-center">
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="text-sm font-semibold">Total Gain:</div>
                  <div className="text-sm">1,063.24</div>
                </div>
                <div className="text-green-500 mr-2 font-bold">
                  <IoIosTrendingUp className="text-3xl" />
                </div>
              </div>
              <div className="flex items-center md:mt-4">
                <div className="mr-4">
                  <div className="text-sm font-semibold">Total Loss:</div>
                  <div className="text-sm">991.73</div>
                </div>
                <div className="text-red-500 mr-2">
                  <IoIosTrendingDown className="text-3xl" />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 bg-white p-4 rounded-lg shadow-md w-full md:max-w-3xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Portfolio</h2>
              <span className="text-lg text-gray-500">...</span>
            </div>
            <div className="overflow-x-auto w-full text-sm md:text-lg  ">
              <table className="w-full text-left text-xm md:text-lg">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 w-full">
                  <tr>
                    <th scope="col" className="p-2">
                      Account
                    </th>
                    <th scope="col" className="p-2">
                      Amount
                    </th>
                    <th scope="col" className="p-2">
                      Change
                    </th>
                    <th scope="col" className="p-2">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {portfolioData.map((data, index) => (
                    <tr className="bg-white border-b" key={index}>
                      <th
                        scope="row"
                        className=" font-medium text-gray-900 whitespace-nowrap"
                      >
                        {data.account}
                      </th>
                      <td className="p-2">{data.amount}</td>
                      <td
                        className={`p-2 ${
                          data.change.startsWith("-")
                            ? "text-red-500"
                            : "text-green-500"
                        }`}
                      >
                        {data.change}
                      </td>
                      <td className="p-2">
                        <a
                          href="#"
                          className="font-medium bg-blue-500 text-white  hover:bg-blue-700 rounded px-4 py-1"
                        >
                          View
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Investments;
