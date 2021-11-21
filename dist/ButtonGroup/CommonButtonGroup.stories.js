"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _CommonButtonGroup = _interopRequireDefault(require("./CommonButtonGroup"));

var _types = require("../../helpers/types");

var _constants = require("../../helpers/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Button Group', module).add('Button Group', function () {
  return /*#__PURE__*/_react.default.createElement(_CommonButtonGroup.default, {
    block: (0, _addonKnobs.boolean)('Block', false),
    buttons: _constants.BUTTONS,
    justified: (0, _addonKnobs.boolean)('Justify', false),
    size: (0, _addonKnobs.select)('Size', _types.COMPONENTS_SIZES, _types.COMPONENTS_SIZES[1]),
    vertical: (0, _addonKnobs.boolean)('Vertical', false)
  });
});