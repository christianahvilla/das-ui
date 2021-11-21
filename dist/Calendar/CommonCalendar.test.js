"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _CommonCalendar = _interopRequireDefault(require("./CommonCalendar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('CommonCalendar', function () {
  it('should render', function () {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_CommonCalendar.default, null));
  });
  it('should render a calendar', function () {
    var component = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_CommonCalendar.default, null));
    var calendar = component.baseElement.querySelector('calendar');
    expect(calendar).toBeDefined();
  });
});