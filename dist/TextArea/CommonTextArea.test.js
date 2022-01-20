"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _CommonTextArea = _interopRequireDefault(require("./CommonTextArea"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('CommonTextArea', function () {
  it('should render', function () {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_CommonTextArea.default, null));
  });
  it('should render a textarea', function () {
    var component = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_CommonTextArea.default, null));
    var textfield = component.baseElement.querySelector('textarea');
    expect(textfield).toBeDefined();
  });
});