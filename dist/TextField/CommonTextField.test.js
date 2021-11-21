"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _CommonTextField = _interopRequireDefault(require("./CommonTextField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('CommonTextField', function () {
  it('should render', function () {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_CommonTextField.default, null));
  });
  it('should render a text field', function () {
    var component = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_CommonTextField.default, null));
    var textfield = component.baseElement.querySelector('textfield');
    expect(textfield).toBeDefined();
  });
});