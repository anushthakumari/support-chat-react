import React from "react";

const Link = ({ payload }) => {
	return (
		<a href={payload.link} className="tag-btn">
			{payload.link}
		</a>
	);
};

export default Link;
