"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _CommonCalendar = _interopRequireDefault(require("./CommonCalendar"));

var _constants = require("../../helpers/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Calendar', module).add('Calendar', function () {
  return /*#__PURE__*/_react.default.createElement(_CommonCalendar.default, {
    events: _constants.EVENT
  });
});