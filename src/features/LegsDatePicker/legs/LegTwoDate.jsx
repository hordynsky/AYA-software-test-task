import React, { Component } from "react";
import PropTypes from "prop-types";
import DatePickerComponent from "material-ui/DatePicker";

import { getYearAndMonthFromDate } from "@app/utils/timeUtils";

export class LegTwoDate extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { legOne, legTwo, onChange } = this.props;

		return (
			<div>
				<DatePickerComponent
					ref={(c) => (this.picker = c)}
					value={legTwo}
					hintText="Select Date 2"
					onChange={onChange}
					onShow={() => {
						if (this.picker.state.date === undefined && legOne)
							this.picker.setState({ dialogDate: getYearAndMonthFromDate(legOne) });
					}}
				/>
			</div>
		);
	}
}

LegTwoDate.propTypes = {
	legOne: PropTypes.object,
	legTwo: PropTypes.object,
	onChange: PropTypes.func,
};
