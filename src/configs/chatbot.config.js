import { createChatBotMessage } from "react-chatbot-kit";

//widgets
import DogPicture from "../widgets/DogPicture";
import GreetSuggestions from "../widgets/GreetSuggestions";

const config = {
	initialMessages: [
		createChatBotMessage(`I'm here to help you explain how I work.`),
		createChatBotMessage(
			"Here's a quick overview over what I need to function. ask me about the different parts to dive deeper.",
			{
				withAvatar: false,
				delay: 500,
				widget: "greetSuggesstions",
			}
		),
	],
	widgets: [
		{
			widgetName: "dogPicture",
			widgetFunc: (props) => <DogPicture {...props} />,
		},
		{
			widgetName: "greetSuggesstions",
			widgetFunc: (props) => <GreetSuggestions {...props} />,
		},
	],
};

export default config;
