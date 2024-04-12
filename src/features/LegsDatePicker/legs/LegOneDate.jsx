import React from "react";
import PropTypes from "prop-types";
import DatePickerComponent from "material-ui/DatePicker";

export const LegOneDate = ({ legOne, onChange }) => (
	<DatePickerComponent hintText="Select Date" value={legOne} onChange={onChange} />
);

LegOneDate.propTypes = {
	legOne: PropTypes.object,
	onChange: PropTypes.func,
};
