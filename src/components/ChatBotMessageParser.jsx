import React from "react";

import { classifyUserMessageIndex } from "../utils/helpers.utils";

const MessageParser = ({ children, actions }) => {
	const handlers = [
		actions.handleHello,
		actions.handleBilling,
		actions.handleAccounts,
		actions.handleGeneralQuestions,
		actions.handleTroubleShootingQuestions,
		actions.handleLoginIssues,
	];

	const parse = (message = "") => {
		const msg = message.toLowerCase();

		const index = classifyUserMessageIndex(msg);
		const handler = handlers[index];

		if (handler) {
			handler();
			return;
		}

		if (message.includes("dog")) {
			actions.handleDog();
			return;
		}

		actions.handleExceptionMsgs();
	};

	return (
		<div>
			{React.Children.map(children, (child) => {
				return React.cloneElement(child, {
					parse: parse,
					actions,
				});
			})}
		</div>
	);
};

export default MessageParser;
