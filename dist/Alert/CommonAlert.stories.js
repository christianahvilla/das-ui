"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _CommonAlert = _interopRequireDefault(require("./CommonAlert"));

var _types = require("../../helpers/types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Alert', module).add('Alert', function () {
  return /*#__PURE__*/_react.default.createElement(_CommonAlert.default, {
    showIcon: (0, _addonKnobs.boolean)('Show Icon', true),
    type: (0, _addonKnobs.select)('Type', _types.ALERT_TYPES, _types.ALERT_TYPES[0]),
    header: (0, _addonKnobs.select)('Header', _types.ALERT_HEADERS, _types.ALERT_HEADERS[0]),
    msg: (0, _addonKnobs.text)('Message', 'Default Message for Alert')
  });
});