"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _CommonButtonToolBar = _interopRequireDefault(require("./CommonButtonToolBar"));

var _constants = require("../../helpers/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('CommonButtonToolBar', function () {
  it('should render', function () {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_CommonButtonToolBar.default, {
      buttons: _constants.BUTTONS,
      size: "sm"
    }));
  });
  it('should render a button toolbar', function () {
    var component = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_CommonButtonToolBar.default, {
      buttons: _constants.BUTTONS,
      size: "sm"
    }));
    var buttonGroup = component.baseElement.querySelector('Button Toolbar');
    expect(buttonGroup).toBeDefined();
  });
});