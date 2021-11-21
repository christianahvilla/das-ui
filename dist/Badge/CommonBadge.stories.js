"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _CommonBadge = _interopRequireDefault(require("./CommonBadge"));

var _types = require("../../helpers/types");

var _CommonButton = _interopRequireDefault(require("../Button/CommonButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrapper = function Wrapper() {
  var Button = function Button() {
    return /*#__PURE__*/_react.default.createElement(_CommonButton.default, {
      onClick: function onClick() {},
      text: "Open"
    });
  };

  return /*#__PURE__*/_react.default.createElement(_CommonBadge.default, {
    color: (0, _addonKnobs.select)('Color', _types.COLOR_COMPONENTS, _types.COLOR_COMPONENTS[0]),
    content: (0, _addonKnobs.number)('Content', 99),
    maxCount: (0, _addonKnobs.number)('Max Count', 99),
    Component: Button
  });
};

(0, _react2.storiesOf)('Badge', module).add('Badge', function () {
  return /*#__PURE__*/_react.default.createElement(Wrapper, null);
});