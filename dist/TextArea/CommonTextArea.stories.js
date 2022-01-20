"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _CommonTextArea = _interopRequireDefault(require("./CommonTextArea"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrapper = function Wrapper() {
  var handleChangeValue = function handleChangeValue(value) {
    // eslint-disable-next-line no-console
    console.log(value);
  };

  return /*#__PURE__*/_react.default.createElement(_CommonTextArea.default, {
    placeholder: (0, _addonKnobs.text)('Placeholder', 'Default Input Value'),
    handleChange: handleChangeValue,
    rows: (0, _addonKnobs.number)('Rows', 4)
  });
};

(0, _react2.storiesOf)('TextArea', module).add('TextArea', function () {
  return /*#__PURE__*/_react.default.createElement(Wrapper, null);
});