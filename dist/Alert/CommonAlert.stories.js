"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _CommonAlert = _interopRequireDefault(require("./CommonAlert"));

var _types = require("../../helpers/types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrapper = function Wrapper() {
  var onClose = function onClose(event) {
    // eslint-disable-next-line no-console
    console.log(event === null || event === void 0 ? void 0 : event.target);
  };

  return /*#__PURE__*/_react.default.createElement(_CommonAlert.default, {
    closable: (0, _addonKnobs.boolean)('Closable', true),
    duration: (0, _addonKnobs.number)('Duration', 3000),
    showIcon: (0, _addonKnobs.boolean)('Show Icon', true),
    type: (0, _addonKnobs.select)('Type', _types.ALERT_TYPES, _types.ALERT_TYPES[0]),
    header: (0, _addonKnobs.select)('Header', _types.ALERT_HEADERS, _types.ALERT_HEADERS[0]),
    msg: (0, _addonKnobs.text)('Message', 'Default Message for Alert'),
    key: (0, _addonKnobs.text)('Key', '1'),
    onClose: onClose
  });
};

(0, _react2.storiesOf)('Alert', module).add('Alert', function () {
  return /*#__PURE__*/_react.default.createElement(Wrapper, null);
});