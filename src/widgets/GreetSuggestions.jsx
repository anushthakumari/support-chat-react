import React from "react";

const GreetSuggestions = ({ actions }) => {
	return (
		<div>
			<button className="tag-btn" onClick={actions.handleGeneralQuestions}>
				General Questions
			</button>
			<button
				onClick={actions.handleTroubleShootingQuestions}
				className="tag-btn">
				Troubleshooting Questions
			</button>
			<button className="tag-btn" onClick={actions.handleAccounts}>
				Account management Questions
			</button>
			<button className="tag-btn" onClick={actions.handleBilling}>
				Billing Questions
			</button>
			<button className="tag-btn" onClick={actions.handleSupportContact}>
				Need Support Contact
			</button>
			<button onClick={actions.handleSupportEmail} className="tag-btn">
				Supprt Email
			</button>
			<button className="tag-btn" onClick={actions.handleLoginIssues}>
				Login Issues
			</button>
		</div>
	);
};

export default GreetSuggestions;
