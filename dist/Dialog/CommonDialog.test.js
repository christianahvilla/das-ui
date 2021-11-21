"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _CommonDialog = _interopRequireDefault(require("./CommonDialog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('CommonBadge', function () {
  it('should render', function () {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_CommonDialog.default, null));
  });
  it('should render a dialog', function () {
    var component = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_CommonDialog.default, null));
    var dialog = component.baseElement.querySelector('Dialog');
    expect(dialog).toBeDefined();
  });
});