import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
	const handleHello = () => {
		const botMessage = createChatBotMessage("Hello. Nice to meet you.", {
			withAvatar: true,
		});

		setState((prev) => ({
			...prev,
			messages: [...prev.messages, botMessage],
		}));
	};
	const handleDog = () => {
		const botMessage = createChatBotMessage(
			"Here's a nice dog picture for you!",
			{
				withAvatar: true,
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
			"Here's the conatct number\n+44 7700 900077\n. hope that helps ;)",
			{
				withAvatar: true,
			}
		);
		setState((prev) => ({
			...prev,
			messages: [...prev.messages, botMessage],
		}));
	};

	const handleSupportEmail = () => {
		const botMessage = createChatBotMessage(
			"Here's the email address: \nsupport@botmail.com\n. hope that helps ;)",
			{
				withAvatar: true,
			}
		);
		setState((prev) => ({
			...prev,
			messages: [...prev.messages, botMessage],
		}));
	};

	const handleLoginIssues = () => {
		const botMessage = createChatBotMessage("Did you try clearing cache?", {
			withAvatar: true,
			widget: "loginIssueOptions",
		});
		setState((prev) => ({
			...prev,
			messages: [...prev.messages, botMessage],
		}));
	};

	const handleLoginIssuesNO = () => {
		const botMessage = createChatBotMessage(
			"Please try login after clearing the cache\n this should help. ;)",
			{
				withAvatar: true,
			}
		);
		setState((prev) => ({
			...prev,
			messages: [...prev.messages, botMessage],
		}));
	};

	const handleGeneralQuestions = () => {
		const botMessage = createChatBotMessage(
			"I can help you with the following",
			{
				widget: "generalQues",
				withAvatar: true,
			}
		);
		setState((prev) => ({
			...prev,
			messages: [...prev.messages, botMessage],
		}));
	};

	const handleTroubleShootingQuestions = () => {
		const botMessage = createChatBotMessage(
			"I can help you with the following",
			{
				widget: "troubleShooting",
				withAvatar: true,
			}
		);
		setState((prev) => ({
			...prev,
			messages: [...prev.messages, botMessage],
		}));
	};

	const handleAccounts = () => {
		const botMessage = createChatBotMessage(
			"I can help you with the following",
			{
				widget: "accounts",
				withAvatar: true,
			}
		);
		setState((prev) => ({
			...prev,
			messages: [...prev.messages, botMessage],
		}));
	};

	const handleBilling = () => {
		const botMessage = createChatBotMessage(
			"I can help you with the following",
			{
				widget: "billing",
				withAvatar: true,
			}
		);
		setState((prev) => ({
			...prev,
			messages: [...prev.messages, botMessage],
		}));
	};

	const installTheSoftware = () => {
		const botMessage = createChatBotMessage(
			"Sure, you can refer to the following link, this might help.\n ",
			{
				widget: "link",
				withAvatar: true,
				payload: {
					link: "https://www.youtube.com/watch?v=hMP9bAn_Okw",
					text: "click to get help",
				},
			}
		);
		setState((prev) => ({
			...prev,
			messages: [...prev.messages, botMessage],
		}));
	};
	const howToMakeCall = () => {
		const botMessage = createChatBotMessage(
			"Sure, you can refer to the following link, this might help.\n ",
			{
				widget: "link",
				withAvatar: true,
				payload: {
					link: "https://www.youtube.com/watch?v=t85kRmsu3s8",
					text: "click to get help",
				},
			}
		);
		setState((prev) => ({
			...prev,
			messages: [...prev.messages, botMessage],
		}));
	};

	const unableToMakeCall = () => {
		const botMessage = createChatBotMessage(
			"I have found a useful doc to help you out\n ",
			{
				widget: "link",
				withAvatar: true,
				payload: {
					link: "https://support.skype.com/en/faq/FA33/why-am-i-having-trouble-calling-a-mobile-or-landline-in-skype",
					text: "click to get help",
				},
			}
		);
		setState((prev) => ({
			...prev,
			messages: [...prev.messages, botMessage],
		}));
	};
	const unableToConnectAudio = () => {
		const botMessage = createChatBotMessage(
			"I have found a useful video reference for you, please watch it.\n ",
			{
				widget: "link",
				withAvatar: true,
				payload: {
					link: "https://www.youtube.com/watch?v=rCzSf-AqvZE",
					text: "click to get help",
				},
			}
		);
		setState((prev) => ({
			...prev,
			messages: [...prev.messages, botMessage],
		}));
	};
	const unableToConnectVideo = () => {
		const botMessage = createChatBotMessage(
			"I have found a useful video reference for you, please watch it.\n ",
			{
				widget: "link",
				withAvatar: true,
				payload: {
					link: "https://www.youtube.com/watch?v=YnXOeVZates",
					text: "click to get help",
				},
			}
		);
		setState((prev) => ({
			...prev,
			messages: [...prev.messages, botMessage],
		}));
	};
	const resetPassword = () => {
		const botMessage = createChatBotMessage(
			"I have found a useful article for you.\n ",
			{
				widget: "link",
				withAvatar: true,
				payload: {
					link: "https://support.microsoft.com/en-gb/office/change-your-skype-for-business-password-on-your-ios-or-android-device-4e2a2624-be9b-4837-b02c-fe812a77f6e7",
					text: "click to get help",
				},
			}
		);
		setState((prev) => ({
			...prev,
			messages: [...prev.messages, botMessage],
		}));
	};
	const updateAccDetails = () => {
		const botMessage = createChatBotMessage(
			"I have found a useful article for you.\n ",
			{
				widget: "link",
				withAvatar: true,
				payload: {
					link: "https://support.skype.com/en/faq/FA34795/how-do-i-update-my-profile-information-in-skype",
					text: "click to get help",
				},
			}
		);
		setState((prev) => ({
			...prev,
			messages: [...prev.messages, botMessage],
		}));
	};

	const skypePlans = () => {
		const botMessage = createChatBotMessage(
			"I have got spcial offer on plans for you.\n ",
			{
				widget: "link",
				withAvatar: true,
				payload: {
					link: "https://www.skype.com/en/international-calls/",
					text: "click to get help",
				},
			}
		);
		setState((prev) => ({
			...prev,
			messages: [...prev.messages, botMessage],
		}));
	};

	const cancelPlans = () => {
		const botMessage = createChatBotMessage(
			"Hmm.. looks line I Don't have access to your account, you can do it yourself by refering to below article.\n ",
			{
				widget: "link",
				withAvatar: true,
				payload: {
					link: "https://support.skype.com/en/faq/fa1881/how-do-i-cancel-or-change-my-skype-subscription",
					text: "click to get help",
				},
			}
		);
		setState((prev) => ({
			...prev,
			messages: [...prev.messages, botMessage],
		}));
	};

	const handleExceptionMsgs = () => {
		const botMessage = createChatBotMessage(
			"Hmm.... I didn't get you there, but I can help you with the following.",
			{
				widget: "greetSuggesstions",
			}
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
						handleGeneralQuestions,
						handleTroubleShootingQuestions,
						handleAccounts,
						handleBilling,
						installTheSoftware,
						howToMakeCall,
						unableToMakeCall,
						unableToConnectAudio,
						unableToConnectVideo,
						resetPassword,
						updateAccDetails,
						skypePlans,
						cancelPlans,
						handleExceptionMsgs,
					},
				});
			})}
		</div>
	);
};

export default ActionProvider;
