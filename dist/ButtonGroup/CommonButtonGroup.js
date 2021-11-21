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

var CommonButtonGroup = function CommonButtonGroup(props) {
  var block = props.block,
      buttons = props.buttons,
      justified = props.justified,
      size = props.size,
      vertical = props.vertical;
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
  return /*#__PURE__*/_react.default.createElement(_rsuite.ButtonGroup, {
    block: block,
    justified: justified,
    size: size,
    vertical: vertical
  }, getButtons);
};

CommonButtonGroup.defaultProps = {
  block: false,
  justified: false,
  size: '',
  vertical: false
};
CommonButtonGroup.propTypes = {
  block: _propTypes.bool,
  buttons: (0, _propTypes.arrayOf)((0, _propTypes.shape)({})).isRequired,
  justified: _propTypes.bool,
  size: _propTypes.string,
  vertical: _propTypes.bool
};
var _default = CommonButtonGroup;
exports.default = _default;