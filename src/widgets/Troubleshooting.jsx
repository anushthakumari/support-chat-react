import React from "react";

const Troubleshooting = ({ actions }) => {
	return (
		<>
			<button className="tag-btn" onClick={actions.unableToMakeCall}>
				Unable to make a call
			</button>
			<button className="tag-btn" onClick={actions.unableToConnectAudio}>
				Unable to connect audio
			</button>
			<button className="tag-btn" onClick={actions.unableToConnectVideo}>
				Unable to connect video
			</button>
		</>
	);
};

export default Troubleshooting;
