import { Menu, Settings, X } from "lucide-react";
import React from "react";
import { useEffect } from "react";
interface Message {
  id: number;
  type: string;
  content: string;
}


export function Room(): React.JSX.Element {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState<boolean>(true);
  const messages: Message[] = [
    { id: 1, type: 'user', content: 'Hello, Claude!' },
    { id: 2, type: 'claude', content: 'Hello! How can I assist you today?' },
    { id: 3, type: 'user', content: 'Can you tell me a joke?' },
    { id: 4, type: 'claude', content: 'Sure! Why did the scarecrow win an award? Because he was outstanding in his field!' },
    { id: 5, type: 'user', content: 'Haha, that’s great!' },
    { id: 6, type: 'claude', content: 'I’m glad you liked it!' },
    { id: 7, type: 'user', content: 'What else can you do?' },
    { id: 8, type: 'claude', content: 'I can help with a variety of tasks, from answering questions to providing recommendations. Just let me know what you need!' },
  ];
  const [input, setInput] = React.useState("");

  useEffect(() => {
      

  },[]);

  const handleSend = () => {
    if (input.trim() === "") return;

    const newMessage = {
      id: messages.length + 1,
      type: 'user',
      content: input.trim(),
    };
    messages.push(newMessage);
    
    setInput("");
  };

  return (
    <div className="flex h-screen bg-white dark:bg-[#7A7D7D]">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'w-64' : 'w-0'} transition-all duration-300 overflow-hidden bg-gray-50 border-r border-gray-200 flex flex-col dark:bg-[#7A7D7D]`}>
        <div className="flex-1 overflow-y-auto p-2"></div>
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <Settings size={16} className="text-gray-500" />
            <span className="text-sm">Settings</span>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col dark:bg-[#7C7C7C] text-gray-900 dark:text-white">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white dark:bg-[#7A7D7D]">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-gray-500 rounded-lg dark:hover:bg-gray-700 transition-colors"
            >
              {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <h1 className="text-lg font-semibold">Claude</h1>
          </div>
          
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50 dark:bg-[#7A7D7D] text-gray-900 dark:text-white">
          <div className="max-w-3xl mx-auto px-4">
            {messages.map((message) => (
              <div key={message.id} className={`py-6 ${message.type === 'user' ? 'place-items-end' : 'place-items-start'}`}>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium ${
                      message.type === 'user' ? 'bg-blue-500' : 'bg-orange-500'
                    }`}>
                      {message.type === 'user' ? 'U' : 'C'}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-gray-900 mb-1">
                      {message.type === 'user' ? 'You' : 'Claude'}
                    </div>
                    <div className="text-gray-800 leading-relaxed whitespace-pre-wrap">
                      {message.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Input Area */}
        <div className="flex justify-center items-center p-4 text-gray-900">
          <div className="relative w-full max-w-2xl">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base text-gray-900 ring-4 ring-transparent transition placeholder:text-neutral-900 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
            />
            <div className="absolute inset-y-1 right-1 flex justify-end">
              <button
                type="button"
                onClick={handleSend}
                aria-label="Send message"
                className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800 disabled:opacity-40"
                disabled={!input.trim()}
              >
                <svg viewBox="0 0 16 6" aria-hidden="true" className="w-4">
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 3 10 .5v2H0v1h10v2L16 3Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
