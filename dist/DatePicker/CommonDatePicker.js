"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _rsuite = require("rsuite");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CommonTextField = function CommonTextField(props) {
  var appearance = props.appearance,
      format = props.format,
      block = props.block,
      defaultValue = props.defaultValue,
      disabled = props.disabled,
      disabledDate = props.disabledDate,
      onSelect = props.onSelect,
      hideHours = props.hideHours,
      hideMinutes = props.hideMinutes,
      isoWeek = props.isoWeek,
      oneTap = props.oneTap,
      placeholder = props.placeholder,
      plaintext = props.plaintext,
      ranges = props.ranges,
      readOnly = props.readOnly,
      size = props.size,
      value = props.value;
  return /*#__PURE__*/_react.default.createElement(_rsuite.DatePicker, {
    id: "id",
    appearance: appearance,
    format: format,
    block: block,
    defaultValue: defaultValue,
    disabled: disabled,
    disabledDate: disabledDate,
    onSelect: onSelect,
    hideHours: hideHours,
    hideMinutes: hideMinutes,
    isoWeek: isoWeek,
    oneTap: oneTap,
    placeholder: placeholder,
    plaintext: plaintext,
    ranges: ranges,
    readOnly: readOnly,
    size: size,
    value: value
  });
};

CommonTextField.defaultProps = {
  appearance: 'default',
  format: 'yyyy-MM-dd HH:mm',
  block: false,
  defaultValue: '',
  disabled: false,
  disabledDate: function disabledDate() {},
  onSelect: function onSelect() {},
  hideHours: function hideHours() {},
  hideMinutes: function hideMinutes() {},
  isoWeek: false,
  oneTap: false,
  placeholder: 'Fecha',
  plaintext: false,
  ranges: [],
  readOnly: false,
  size: 'md',
  value: ''
};
CommonTextField.propTypes = {
  appearance: _propTypes.string,
  format: _propTypes.string,
  block: _propTypes.bool,
  defaultValue: _propTypes.string,
  disabled: _propTypes.bool,
  disabledDate: _propTypes.func,
  onSelect: _propTypes.func,
  hideHours: _propTypes.func,
  hideMinutes: _propTypes.func,
  isoWeek: _propTypes.bool,
  oneTap: _propTypes.bool,
  placeholder: _propTypes.string,
  plaintext: _propTypes.bool,
  ranges: (0, _propTypes.arrayOf)((0, _propTypes.shape)({})),
  readOnly: _propTypes.bool,
  size: _propTypes.string,
  value: _propTypes.string
};
var _default = CommonTextField;
exports.default = _default;