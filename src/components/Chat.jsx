import { useState } from "react";
import { quickReplies } from "./data";
import Header from "./Header";
import Footer from "./Footer";

function Chat() {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    console.log(message);
    setMessage(""); // Clear the input after sending the message
  };
  return (
    <>
      <Header />
      <main className="mt-16 p-2 w-full min-h-screen bg-slate-100">
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md ">
          <div className="flex items-center mb-4">
            <div className="ml-3">
              <p className="text-lg font-medium">
                Chat with Our Virtual Assistant - Hanam
              </p>
            </div>
          </div>

          <div className="h-96 w-full mb-4 p-3 rounded bg-blue-100">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="ml-2 bg-blue-600 p-3 rounded-lg">
                  <p className="text-sm text-gray-100">
                    Hello! How can I help you today?
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-3 mb-4">
            {quickReplies.map((reply, index) => (
              <button
                key={index}
                className="bg-blue-300 hover:bg-blue-500 text-gray-800 font-semibold py-2 px-4 rounded-lg"
                onClick={() => setMessage(reply)}
              >
                {reply}
              </button>
            ))}
          </div>
          <div className="mt-4 flex items-center">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 py-2 px-3 rounded-full bg-gray-100 focus:outline-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-full ml-3 hover:bg-blue-600"
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
          <p className="text-sky-500 font-medium mt-4 text-right">
            Request Human
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Chat;
