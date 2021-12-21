"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _CommonButtonGroup = _interopRequireDefault(require("./CommonButtonGroup"));

var _constants = require("../../helpers/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('CommonButtonGroup', function () {
  it('should render', function () {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_CommonButtonGroup.default, {
      buttons: _constants.BUTTONS,
      size: "sm"
    }));
  });
  it('should render a buttongroup', function () {
    var component = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_CommonButtonGroup.default, {
      buttons: _constants.BUTTONS,
      size: "sm"
    }));
    var buttonGroup = component.baseElement.querySelector('Button Group');
    expect(buttonGroup).toBeDefined();
  });
});