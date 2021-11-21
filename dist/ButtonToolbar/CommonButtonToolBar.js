"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = require("prop-types");

var _react = _interopRequireDefault(require("react"));

var _rsuite = require("rsuite");

var _CommonButton = _interopRequireDefault(require("../Button/CommonButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CommonButtonToolBar = function CommonButtonToolBar(props) {
  var buttons = props.buttons,
      size = props.size;
  var getButtons = buttons.map(function (button) {
    var appearance = button.appearance,
        color = button.color,
        disabled = button.disabled,
        key = button.key,
        loading = button.loading,
        onClick = button.onClick,
        text = button.text;
    return /*#__PURE__*/_react.default.createElement(_CommonButton.default, {
      appearance: appearance,
      color: color,
      disabled: disabled,
      key: key,
      loading: loading,
      onClick: onClick,
      text: text
    });
  });
  return /*#__PURE__*/_react.default.createElement(_rsuite.ButtonToolbar, {
    size: size
  }, getButtons);
};

CommonButtonToolBar.defaultProps = {
  size: ''
};
CommonButtonToolBar.propTypes = {
  buttons: (0, _propTypes.arrayOf)((0, _propTypes.shape)({})).isRequired,
  size: _propTypes.string
};
var _default = CommonButtonToolBar;
exports.default = _default;