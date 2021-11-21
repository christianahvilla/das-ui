"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _CommonSelectPicker = _interopRequireDefault(require("./CommonSelectPicker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('CommonSelectPicker', function () {
  it('should render', function () {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_CommonSelectPicker.default, null));
  });
  it('should render a badge', function () {
    var component = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_CommonSelectPicker.default, null));
    var selectPicker = component.baseElement.querySelector('SelectPicker');
    expect(selectPicker).toBeDefined();
  });
});