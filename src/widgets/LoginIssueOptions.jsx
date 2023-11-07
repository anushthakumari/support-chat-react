import React from "react";

const LoginIssueOptions = ({ actions }) => {
	return (
		<>
			<button className="tag-btn" onClick={actions.handleSupportContact}>
				Yes
			</button>
			<button className="tag-btn" onClick={actions.handleLoginIssuesNO}>
				No
			</button>
		</>
	);
};

export default LoginIssueOptions;
