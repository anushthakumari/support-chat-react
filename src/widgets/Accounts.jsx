import React from "react";

const Accounts = ({ actions }) => {
	return (
		<>
			<button className="tag-btn" onClick={actions.resetPassword}>
				Reset My Password
			</button>
			<button className="tag-btn" onClick={actions.updateAccDetails}>
				Update My Details
			</button>
		</>
	);
};

export default Accounts;
