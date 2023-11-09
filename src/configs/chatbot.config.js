import { createChatBotMessage } from "react-chatbot-kit";

//widgets
import DogPicture from "../widgets/DogPicture";
import GreetSuggestions from "../widgets/GreetSuggestions";
import LoginIssueOptions from "../widgets/LoginIssueOptions";
import GeneralQues from "../widgets/GeneralQues";
import Troubleshooting from "../widgets/Troubleshooting";
import Accounts from "../widgets/Accounts";
import BillingInfo from "../widgets/BillingInfo";
import Link from "../widgets/Link";

const config = {
	initialMessages: [
		createChatBotMessage(`I'm here to help you explain how I work.`),
		createChatBotMessage(
			"Here's a quick overview over what I need to function. ask me about the different parts to dive deeper.",
			{
				withAvatar: true,
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
		{
			widgetName: "loginIssueOptions",
			widgetFunc: (props) => <LoginIssueOptions {...props} />,
		},
		{
			widgetName: "generalQues",
			widgetFunc: (props) => <GeneralQues {...props} />,
		},
		{
			widgetName: "troubleShooting",
			widgetFunc: (props) => <Troubleshooting {...props} />,
		},
		{
			widgetName: "accounts",
			widgetFunc: (props) => <Accounts {...props} />,
		},
		{
			widgetName: "billing",
			widgetFunc: (props) => <BillingInfo {...props} />,
		},
		{
			widgetName: "link",
			widgetFunc: (props) => <Link {...props} />,
		},
	],
};

export default config;
