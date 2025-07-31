import { Link } from "@tanstack/react-router";
import { ListTree, ListX, Settings, Search, X, Users } from "lucide-react";
import React from "react";
import { useEffect } from "react";

interface Message {
  id: number;
  type: string;
  content: string;
}

export function Room(): React.JSX.Element {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState<boolean>(true);
  const [isRightPanelOpen, setIsRightPanelOpen] =
    React.useState<boolean>(false);
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const messages: Message[] = [
    { id: 1, type: "user", content: "Hello, Claude!" },
    { id: 2, type: "claude", content: "Hello! How can I assist you today?" },
    { id: 3, type: "user", content: "Can you tell me a joke?" },
    {
      id: 4,
      type: "claude",
      content:
        "Sure! Why did the scarecrow win an award? Because he was outstanding in his field!",
    },
    { id: 5, type: "user", content: "Haha, that's great!" },
    { id: 6, type: "claude", content: "I'm glad you liked it!" },
    { id: 7, type: "user", content: "What else can you do?" },
    {
      id: 8,
      type: "claude",
      content:
        "I can help with a variety of tasks, from answering questions to providing recommendations. Just let me know what you need!",
    },
  ];
  const [input, setInput] = React.useState("");

  useEffect(() => {}, []);

  const handleSend = () => {
    if (input.trim() === "") return;

    const newMessage = {
      id: messages.length + 1,
      type: "user",
      content: input.trim(),
    };
    messages.push(newMessage);

    setInput("");
  };

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-[#495057] relative">
      {/* Top Navigation Bar for Links */}
      <div className="h-12 border-b border-gray-700 flex items-center justify-between px-4 bg-white dark:bg-[#495057]">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors text-gray-600 dark:text-gray-300"
          >
            {isSidebarOpen ? <ListX size={15} /> : <ListTree size={15} />}
          </button>
          <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
            Chat with Claude
          </h1>
          <button
            onClick={() => setIsRightPanelOpen(!isRightPanelOpen)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors text-gray-600 dark:text-gray-300 ml-4"
          >
            <Users size={15} />
          </button>
        </div>
        <div className="flex items-center space-x-6">
          <Link
            to="/home"
            className="text-gray-800 dark:text-gray-200 font-mono [&.active]:text-teal-500 hover:text-teal-400"
          >
            Home
          </Link>
          <Link
            to="/chat"
            className="text-gray-800 dark:text-gray-200 font-mono [&.active]:text-teal-500 hover:text-teal-400"
          >
            Chat
          </Link>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 bg-white dark:bg-[#495057] relative">
        {/* Sidebar */}
        <div
          className={`${
            isSidebarOpen ? "w-64" : "w-0"
          } transition-all duration-300 overflow-hidden bg-gray-50 dark:bg-[#495057] border-r border-gray-200 dark:border-gray-600 flex flex-col`}
        >
          {/* Search Bar */}
          <div className="p-3 border-b border-gray-200 dark:border-gray-600">
            <div className="relative">
              <Search
                size={16}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search conversations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-900 dark:text-white placeholder:text-gray-400"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-2">
            {/* Chat history would go here */}
            <div className="space-y-2 mt-4">
              <div className="px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg cursor-pointer">
                Previous conversation 1
              </div>
              <div className="px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg cursor-pointer">
                Previous conversation 2
              </div>
              <div className="px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg cursor-pointer">
                Previous conversation 3
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-gray-200 dark:border-gray-600">
            <div className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg cursor-pointer text-gray-700 dark:text-gray-300">
              <Settings
                size={16}
                className="text-gray-500 dark:text-gray-400"
              />
              <span className="text-sm">Settings</span>
            </div>
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col dark:bg-[#495057] text-gray-900 dark:text-white relative">
          {/* Messages - Reduced height to make room for floating input */}
          <div className="flex flex-1">
            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto pb-24 bg-gray-50 dark:bg-[#495057]">
              <div className="max-w-2xl mx-auto px-4 py-4">
                {messages.map((message) => (
                  <div key={message.id} className="py-3">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0">
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center text-white text-sm font-medium ${
                            message.type === "user"
                              ? "bg-blue-500"
                              : "bg-orange-500"
                          }`}
                        >
                          {message.type === "user" ? "U" : "C"}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-1">
                          {message.type === "user" ? "You" : "Claude"}
                        </div>
                        <div className="text-gray-800 dark:text-[#f8f9fa] leading-relaxed whitespace-pre-wrap text-sm">
                          {message.content}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Panel */}
            <div
              className={`${
                isRightPanelOpen ? "w-48" : "w-0"
              } transition-all duration-300 overflow-hidden bg-gray-50 dark:bg-[#495057] border-l border-gray-200 dark:border-gray-600 flex flex-col`}
            >
              <div className="p-3 border-b border-gray-200 dark:border-gray-600">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                  Options
                </h3>
              </div>
              <div className="flex-1 overflow-y-auto p-3">
                <div className="space-y-2">
                  <div className="px-3 py-2 text-xs text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg cursor-pointer">
                    Export Chat
                  </div>
                  <div className="px-3 py-2 text-xs text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg cursor-pointer">
                    Clear History
                  </div>
                  <div className="px-3 py-2 text-xs text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg cursor-pointer">
                    Share Chat
                  </div>
                  <div className="px-3 py-2 text-xs text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg cursor-pointer">
                    Report Issue
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Input Area */}
          <div className="absolute bottom-0 left-0 right-0 bg-white dark:bg-[#495057] border-t border-gray-200 dark:border-gray-600 shadow-lg">
            <div className="flex justify-center items-center p-4">
              <div className="relative w-full max-w-2xl">
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  className="block w-full rounded-2xl border border-neutral-300 dark:border-gray-600 bg-white dark:bg-[#495057] py-3 pl-5 pr-16 text-base text-gray-900 dark:text-white ring-4 ring-transparent transition placeholder:text-neutral-500 dark:placeholder:text-gray-400 focus:border-neutral-950 dark:focus:border-gray-300 focus:outline-none focus:ring-neutral-950/5 dark:focus:ring-gray-300/10"
                />
                <div className="absolute inset-y-1 right-1 flex justify-end">
                  <button
                    type="button"
                    onClick={handleSend}
                    aria-label="Send message"
                    className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 dark:bg-gray-700 text-white transition hover:bg-neutral-800 dark:hover:bg-gray-600 disabled:opacity-40"
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
      </div>
    </div>
  );
}
