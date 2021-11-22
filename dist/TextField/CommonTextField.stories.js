"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _CommonTextField = _interopRequireDefault(require("./CommonTextField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrapper = function Wrapper() {
  var handleChangeValue = function handleChangeValue(value) {
    // eslint-disable-next-line no-console
    console.log(value);
  };

  return /*#__PURE__*/_react.default.createElement(_CommonTextField.default, {
    placeholder: (0, _addonKnobs.text)('Placeholder', 'Default Input Value'),
    handleChange: handleChangeValue
  });
};

(0, _react2.storiesOf)('Text Field', module).add('Text Field', function () {
  return /*#__PURE__*/_react.default.createElement(Wrapper, null);
});