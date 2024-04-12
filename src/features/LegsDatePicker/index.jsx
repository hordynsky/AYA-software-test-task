import React, { Component } from "react";

import * as Legs from "@app/features/LegsDatePicker/legs";

class LegsDatePicker extends Component {
	constructor(props) {
		super(props);
		this.state = {
			legOne: null,
			legTwo: null,
		};

		this.onLegOneDateChanged = this.onLegOneDateChanged.bind(this);
		this.onLegTwoDateChanged = this.onLegTwoDateChanged.bind(this);
	}

	onLegOneDateChanged(_, legOne) {
		this.setState({
			legOne,
		});
	}

	onLegTwoDateChanged(_, legTwo) {
		this.setState({
			legTwo,
		});
	}

	render() {
		const { legOne, legTwo } = this.state;

		return (
			<div>
				<h1>Leg one:</h1>
				<Legs.LegOneDate {...{ legOne, onChange: this.onLegOneDateChanged }} />
				<h1>Leg two:</h1>
				<Legs.LegTwoDate {...{ legOne, legTwo, onChange: this.onLegTwoDateChanged }} />
			</div>
		);
	}
}

export default LegsDatePicker;
