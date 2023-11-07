import React from "react";

const GreetSuggestions = ({ actions }) => {
	return (
		<div>
			<button className="tag-btn" onClick={actions.handleSupportContact}>
				Need Support Contact
			</button>
			<button onClick={actions.handleSupportEmail} className="tag-btn">
				Supprt Email
			</button>
			<button className="tag-btn" onClick={actions.handleLoginIssues}>
				Login Issues
			</button>
			<button className="tag-btn">FAQ</button>
		</div>
	);
};

export default GreetSuggestions;
