import React from "react";
import loadSpinner from "../../assets/loadSpinner.gif";

function Spinner() {
	return (
		<div>
			<img
				src={loadSpinner}
				alt="spinner"
				style={{ width: "50px", margin: "auto", display: "block" }}
			/>
		</div>
	);
}

export default Spinner;
