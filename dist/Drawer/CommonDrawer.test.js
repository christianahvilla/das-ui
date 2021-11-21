"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _CommonDrawer = _interopRequireDefault(require("./CommonDrawer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('CommonDrawer', function () {
  it('should render', function () {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_CommonDrawer.default, {
      expanded: true
    }));
  });
  it('should render a drawer', function () {
    var component = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_CommonDrawer.default, {
      expanded: true
    }));
    var drawer = component.baseElement.querySelector('drawer');
    expect(drawer).toBeDefined();
  });
});