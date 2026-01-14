import React from 'react';
import { Helmet } from 'react-helmet-async';

const LiveChatPage = () => {
  return (
    <>
      <Helmet>
        <title>Live Chat - YFV Platform</title>
        <meta name="description" content="Chat with support" />
      </Helmet>

      <div className="page-container">
        <h1 className="section-title">Live Chat</h1>
        <div className="max-w-4xl">

          <div className="max-w-2xl mx-auto card"><h2 className="text-xl font-semibold mb-4">Live Chat Support</h2><div className="bg-gray-100 rounded-lg p-4 h-96 mb-4"><p className="text-gray-500 text-center">Chat interface will appear here</p></div><div className="flex space-x-2"><input type="text" className="input-field flex-1" placeholder="Type your message..." /><button className="btn-primary">Send</button></div></div>
        </div>
      </div>
    </>
  );
};

export default LiveChatPage;
