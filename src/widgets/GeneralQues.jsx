import React from "react";

const GeneralQues = ({ actions }) => {
	return (
		<>
			<button className="tag-btn" onClick={actions.installTheSoftware}>
				Help me install the software
			</button>
			<button className="tag-btn" onClick={actions.howToMakeCall}>
				How to make a call
			</button>
		</>
	);
};

export default GeneralQues;
