import React, { Component } from "react";
import PropTypes from "prop-types";

import {
  NativeModules,
  requireNativeComponent,
  View,
  Text
} from "react-native";

class MaterialCalendarComponent extends Component {
  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
  }

  _onChange(event) {
    if (!this.props.onDateChange) {
      return;
    }
    this.props.onDateChange(event.nativeEvent);
  }

  render() {
    return <MaterialCalendar {...this.props} onChange={this._onChange} />;
  }
}

MaterialCalendarComponent.propTypes = {
  day: PropTypes.number,
  month: PropTypes.number,
  year: PropTypes.number,
  onDateChange: PropTypes.func,
  ...View.propTypes
};

const MaterialCalendar = requireNativeComponent(
  `RNMaterialCalendarView`,
  MaterialCalendarComponent,
  {
    nativeOnly: {
      onChange: true
    }
  }
);

export default MaterialCalendarComponent;
