"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _CommonBadge = _interopRequireDefault(require("./CommonBadge"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('CommonBadge', function () {
  it('should render', function () {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_CommonBadge.default, null));
  });
  it('should render a badge', function () {
    var component = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_CommonBadge.default, null));
    var buttonGroup = component.baseElement.querySelector('Badge');
    expect(buttonGroup).toBeDefined();
  });
});