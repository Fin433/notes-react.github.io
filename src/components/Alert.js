import React, { useContext } from "react";
import { AlertContext } from "../context/alert/alertContext";

export const Alert = () => {
	const {alert, hide} = useContext(AlertContext)

	if (!alert.visible) {
		return null
	}


	return (
		<div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
			<strong>Внимание!</strong>
			&nbsp; {/* пробел */} {alert.text}
			<button
				onClick={hide}
				type="button"
				className="btn-close"
				aria-label="Close"
			>
			<span aria-hidden="true">&times;</span>
			</button>
		</div>
	);
};