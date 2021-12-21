"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _CommonChart = _interopRequireDefault(require("./CommonChart"));

var _constants = require("../../helpers/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Chart', module).add('Chart', function () {
  return /*#__PURE__*/_react.default.createElement(_CommonChart.default, {
    type: (0, _addonKnobs.select)('Type', _constants.CHART_TYPES, _constants.CHART_TYPES[0]),
    options: _constants.CHART_OPTIONS,
    series: _constants.CHART_SERIES,
    height: (0, _addonKnobs.number)('Height', 350),
    width: (0, _addonKnobs.number)('Width', 500)
  });
});