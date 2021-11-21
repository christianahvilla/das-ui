"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _CommonButtonToolBar = _interopRequireDefault(require("./CommonButtonToolBar"));

var _types = require("../../helpers/types");

var _constants = require("../../helpers/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Button Toolbar', module).add('Button Toolbar', function () {
  return /*#__PURE__*/_react.default.createElement(_CommonButtonToolBar.default, {
    buttons: _constants.BUTTONS,
    size: (0, _addonKnobs.select)('Size', _types.COMPONENTS_SIZES, _types.COMPONENTS_SIZES[1])
  });
});