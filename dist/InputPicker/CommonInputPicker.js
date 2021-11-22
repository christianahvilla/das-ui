"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _rsuite = require("rsuite");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CommonInputPicker = function CommonInputPicker(props) {
  var appearance = props.appearance,
      block = props.block,
      data = props.data,
      disabled = props.disabled,
      cleanable = props.cleanable,
      onChange = props.onChange,
      plaintext = props.plaintext,
      readOnly = props.readOnly,
      selectWidth = props.selectWidth,
      size = props.size;
  return /*#__PURE__*/_react.default.createElement(_rsuite.InputPicker, {
    appearance: appearance,
    block: block,
    data: data,
    disabled: disabled,
    cleanable: cleanable,
    onChange: onChange,
    plaintext: plaintext,
    readOnly: readOnly,
    size: size,
    style: block ? null : {
      width: selectWidth
    }
  });
};

CommonInputPicker.defaultProps = {
  appearance: '',
  block: false,
  data: [],
  disabled: false,
  cleanable: true,
  onChange: function onChange() {},
  plaintext: false,
  readOnly: false,
  selectWidth: 224,
  size: ''
};
CommonInputPicker.propTypes = {
  appearance: _propTypes.string,
  block: _propTypes.bool,
  data: (0, _propTypes.arrayOf)((0, _propTypes.shape)({})),
  disabled: _propTypes.bool,
  cleanable: _propTypes.bool,
  onChange: _propTypes.func,
  plaintext: _propTypes.bool,
  readOnly: _propTypes.bool,
  selectWidth: _propTypes.number,
  size: _propTypes.string
};
var _default = CommonInputPicker;
exports.default = _default;