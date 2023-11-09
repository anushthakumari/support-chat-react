import React from "react";

const BillingInfo = ({ actions }) => {
	return (
		<>
			<button className="tag-btn" onClick={actions.updateAccDetails}>
				Update My Billing Info
			</button>

			<button className="tag-btn" onClick={actions.skypePlans}>
				Skype Plans
			</button>

			<button className="tag-btn" onClick={actions.cancelPlans}>
				Cancel My Plans
			</button>
		</>
	);
};

export default BillingInfo;
