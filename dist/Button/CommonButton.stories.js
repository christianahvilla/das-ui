"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _CommonButton = _interopRequireDefault(require("./CommonButton"));

var _types = require("../../helpers/types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrapper = function Wrapper() {
  var onClick = function onClick() {
    // eslint-disable-next-line no-console
    console.log('clicked');
  };

  return /*#__PURE__*/_react.default.createElement(_CommonButton.default, {
    appearance: (0, _addonKnobs.select)('Type button', _types.TYPE_COMPONENTS, _types.TYPE_COMPONENTS[0]),
    color: (0, _addonKnobs.select)('Color button', _types.COLOR_COMPONENTS, _types.COLOR_COMPONENTS[0]),
    disabled: (0, _addonKnobs.boolean)('Disabled', false),
    loading: (0, _addonKnobs.boolean)('Loading', false),
    onClick: onClick,
    text: (0, _addonKnobs.text)('Text button', 'Click')
  });
};

(0, _react2.storiesOf)('Button', module).add('Button', function () {
  return /*#__PURE__*/_react.default.createElement(Wrapper, null);
});