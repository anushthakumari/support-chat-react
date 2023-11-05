import React from "react";
import Chatbot from "react-chatbot-kit";

import config from "./configs/chatbot.config";
import MessageParser from "./components/ChatBotMessageParser";
import ActionProvider from "./components/ChatBotActionProvider";

import "react-chatbot-kit/build/main.css";

function App() {
	return (
		<div className="App">
			<div className="App-header">
				<Chatbot
					config={config}
					headerText="Chatbot"
					messageParser={MessageParser}
					actionProvider={ActionProvider}
				/>
			</div>
		</div>
	);
}

export default App;
