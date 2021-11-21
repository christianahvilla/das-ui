"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _CommonButton = _interopRequireDefault(require("./CommonButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('CommonButton', function () {
  it('should render', function () {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_CommonButton.default, null));
  });
  it('should render a button', function () {
    var component = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_CommonButton.default, null));
    var button = component.baseElement.querySelector('button');
    expect(button).toBeDefined();
  });
});