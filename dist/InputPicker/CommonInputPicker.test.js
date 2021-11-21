"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _CommonInputPicker = _interopRequireDefault(require("./CommonInputPicker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('CommonSelectPicker', function () {
  it('should render', function () {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_CommonInputPicker.default, null));
  });
  it('should render a badge', function () {
    var component = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_CommonInputPicker.default, null));
    var inputPicker = component.baseElement.querySelector('InputPicker');
    expect(inputPicker).toBeDefined();
  });
});