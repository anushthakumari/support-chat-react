import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
	const handleHello = () => {
		const botMessage = createChatBotMessage("Hello. Nice to meet you.");

		setState((prev) => ({
			...prev,
			messages: [...prev.messages, botMessage],
		}));
	};
	const handleDog = () => {
		const botMessage = createChatBotMessage(
			"Here's a nice dog picture for you!",
			{
				widget: "dogPicture",
			}
		);
		setState((prev) => ({
			...prev,
			messages: [...prev.messages, botMessage],
		}));
	};

	const handleSupportContact = () => {
		const botMessage = createChatBotMessage(
			"Here's the conatct number\n+44 7700 900077\n. hope that helps ;)"
		);
		setState((prev) => ({
			...prev,
			messages: [...prev.messages, botMessage],
		}));
	};

	const handleSupportEmail = () => {
		const botMessage = createChatBotMessage(
			"Here's the email address: \nsupport@botmail.com\n. hope that helps ;)"
		);
		setState((prev) => ({
			...prev,
			messages: [...prev.messages, botMessage],
		}));
	};

	const handleLoginIssues = () => {
		const botMessage = createChatBotMessage("Did you try clearing cache?", {
			widget: "loginIssueOptions",
		});
		setState((prev) => ({
			...prev,
			messages: [...prev.messages, botMessage],
		}));
	};

	const handleLoginIssuesNO = () => {
		const botMessage = createChatBotMessage(
			"Please try login after clearing the cache\n this should help. ;)"
		);
		setState((prev) => ({
			...prev,
			messages: [...prev.messages, botMessage],
		}));
	};

	return (
		<div>
			{React.Children.map(children, (child) => {
				return React.cloneElement(child, {
					actions: {
						handleHello,
						handleDog,
						handleSupportContact,
						handleSupportEmail,
						handleLoginIssues,
						handleLoginIssuesNO,
					},
				});
			})}
		</div>
	);
};

export default ActionProvider;
