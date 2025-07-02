import React, { useState, useEffect, useRef } from 'react';
import assistant_img from '../image/assistant.png';

const apiUrl = import.meta.env.VITE_BACKEND_ADD;

export default function HealthAssistant() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! I’m your Health Assistant. How can I help you today?' },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);


  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { sender: 'user', text: input }]);
    setInput('');

	const res = await fetch(`${apiUrl}/api/chat`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ message: `give answer in short response ${input}` }),
	});

    const data = await res.json();
	console.log(data);
  	setMessages((prev) => [...prev, { sender: 'bot', text: data.reply }]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
	<>
	{isOpen ?
	<div
		className="fixed sm:bottom-4 sm:right-4 bottom-1 right-2 z-50"
		onClick={() => setIsOpen(false)}
		>
		<button
			className="p-1.5 rounded-full shadow-md bg-white hover:scale-105 transition-all duration-200 ring-2 ring-blue-300"
			title="Open Health Assistant"
		>
			<div className="h-12 w-12 rounded-full overflow-hidden">
			<img
				src={assistant_img}
				alt="Assistant"
				className="h-full w-full object-cover"
			/>
			</div>
		</button>
	</div>

	:
    <div className="fixed sm:bottom-5 sm:right-5 bottom-2 right-2 z-50 h-[80vh] w-[45vh] sm:w-[60vh] flex flex-col bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-600 dark:bg-gray-900">
		<div>
			<button
				onClick={() => setIsOpen(true)}
				className="absolute top-2 right-2 text-white hover:text-red-200"
       		>
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
        	</button>
		</div>
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-400 to-cyan-500 text-white px-5 py-4 flex items-center gap-3 shadow-md shrink-0">
        <div className="bg-white/20 w-10 h-10 rounded-full flex items-center justify-center">
          <div className="bg-white w-6 h-6 rounded-full flex items-center justify-center text-emerald-600">🏥</div>
        </div>
        <div>
          <h1 className="font-bold text-lg">Health Assistant</h1>
          <p className="text-xs opacity-80 flex items-center gap-1">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            Online • Monitoring vitals
          </p>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-emerald-50 to-cyan-50 dark:from-gray-100 dark:to-gray-200">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === 'bot' ? 'justify-start' : 'justify-end'}`}>
            <div
              className={`max-w-[85%] px-4 py-3 rounded-2xl transition-all duration-300 transform ${
                msg.sender === 'bot'
                  ? 'bg-white text-gray-800 shadow-sm dark:bg-blue-500 dark:text-blue-100 rounded-tl-none'
                  : 'bg-gradient-to-r from-green-400 to-green-400 text-white rounded-tr-none'
              }`}
            >
              <div className="flex items-start gap-2">
                {msg.sender === 'bot' && (
                  <div className="bg-emerald-100 w-6 h-6 rounded-full flex items-center justify-center text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300 flex-shrink-0">
                    💡
                  </div>
                )}
                <pre className="text-xs overflow-auto text-wrap">{msg.text}</pre>
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 shrink-0">
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your health concern..."
              className="w-full pl-4 pr-10 py-3 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
            />
          </div>
          <button
            onClick={sendMessage}
            disabled={!input.trim()}
            className={`p-3 rounded-full transition-all duration-200 ${
              input.trim()
                ? 'bg-gradient-to-r from-emerald-400 to-cyan-400 text-white hover:from-emerald-500 hover:to-cyan-500 shadow-md transform hover:scale-105'
                : 'bg-gray-200 text-gray-400 dark:bg-gray-700 dark:text-gray-500 cursor-not-allowed'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </button>
        </div>
        <div className="flex justify-center mt-3">
          <p className="text-xs text-gray-500 dark:text-gray-400">Your messages are private and secure</p>
        </div>
      </div>
    </div>
	}
	</>
  );
}
