"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = require("prop-types");

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("rsuite/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CommonButton = function CommonButton(props) {
  var appearance = props.appearance,
      color = props.color,
      disabled = props.disabled,
      key = props.key,
      loading = props.loading,
      onClick = props.onClick,
      text = props.text;
  return /*#__PURE__*/_react.default.createElement(_Button.default, {
    key: key,
    loading: loading,
    disabled: disabled,
    color: color,
    appearance: appearance,
    onClick: onClick
  }, text);
};

CommonButton.defaultProps = {
  appearance: 'default',
  color: 'red',
  disabled: false,
  key: '',
  loading: false,
  onClick: function onClick() {},
  text: ''
};
CommonButton.propTypes = {
  appearance: _propTypes.string,
  color: _propTypes.string,
  disabled: _propTypes.bool,
  key: _propTypes.string,
  loading: _propTypes.bool,
  onClick: _propTypes.func,
  text: _propTypes.string
};
var _default = CommonButton;
exports.default = _default;