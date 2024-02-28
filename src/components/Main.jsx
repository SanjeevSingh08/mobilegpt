import React from 'react'
import { useState, useEffect, useRef } from "react";
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import axios from 'axios';
import TypingAnimation from "../components/TypingAnimation";
const Mainfile = () => {
    const [inputValue, setInputValue] = useState('');
    const [chatLog, setChatLog] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    // Use a ref to access the chat container element
    const chatContainerRef = useRef(null);
  
    // Scroll to the bottom of the chat when chatLog changes
    useEffect(() => {
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
      }
    }, [chatLog]);
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      setChatLog((prevChatLog) => [...prevChatLog, { type: 'user', message: inputValue }]);
      const prompt =
      "Please answer in 8 year old kid understandable language and within 140 characters and  not more than 140 characters, it could be 80 characters or 50 characters but not more than 140 characters: \n here is the question" +
      inputValue;
      sendMessage(prompt);
  
      setInputValue('');
    }
  
    const sendMessage = (message) => {
      const url = '/api/chat';
  
      const data = {
        model: "gpt-3.5-turbo-0125",
        messages: [{ "role": "user", "content": message }]
      };
  
      setIsLoading(true);
  
      axios.post(url, data).then((response) => {
        console.log(response);
        setChatLog((prevChatLog) => [...prevChatLog, { type: 'bot', message: response.data.choices[0].message.content }]);
        setIsLoading(false);
      }).catch((error) => {
        setIsLoading(false);
        console.log(error);
      })
    }
    
  
    return (
      
      <div className="main-container container mx-auto  flex flex-col h-full">
      <div className="p-2 ">
        <div className='bg-slate-200 inline-block px-2'>
        <h1 className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text text-left font-bold text-base ">56765 MTN</h1></div>
        <h4 className="text-black text-center py-1 text-[10px] mt-2 ">Type your question here.</h4>
      </div>
      <div className="flex-grow p-2 chat-section overflow-y-auto" ref={chatContainerRef}>
        <div className="flex flex-col mt-1">
          {chatLog.map((message, index) => (
            <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`${message.type === 'user' ? 'bg-purple-400 text-white p-1' : 'bg-white text-black p-2'} rounded-lg  max-w-sm text-[10px] border border-purple-400 mt-1 leading-[14px]`}>
                {message.message}
              </div>
            </div>
          ))}
          {isLoading && (
            <div key={chatLog.length} className="flex justify-start">
              <div className="bg-gray-800 rounded-lg p-2 text-white max-w-sm text-sm ">
                <TypingAnimation />
              </div>
            </div>
          )}
        </div>
      </div>
      <form onSubmit={handleSubmit} className="flex-none pt-2 pb-2 type-section">
        <div className=" w-full pt-0 px-1 ">
          <div className="flex rounded-lg border border-gray-700 ">
            <input
              type="text"
              className="flex-grow px-3 py-1 bg-transparent w-[60%] text-black focus:outline-none text-[11px] "
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              type="submit"
              className="bg-purple-500 text-[11px] rounded-lg px-2 py-1 text-white font-semibold focus:outline-none hover:bg-purple-600 transition-colors duration-300"
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
    
    );
}

export default Mainfile
