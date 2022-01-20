"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = require("prop-types");

var _react = _interopRequireDefault(require("react"));

var _rsuite = require("rsuite");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CommonTextArea = function CommonTextArea(props) {
  var className = props.className,
      handleChange = props.handleChange,
      placeholder = props.placeholder,
      rows = props.rows;
  return /*#__PURE__*/_react.default.createElement(_rsuite.Input, {
    as: "textarea",
    onChange: handleChange,
    rows: rows,
    className: className,
    placeholder: placeholder
  });
};

CommonTextArea.defaultProps = {
  className: '',
  handleChange: function handleChange() {},
  placeholder: 'Default Textarea',
  rows: 3
};
CommonTextArea.propTypes = {
  className: _propTypes.string,
  handleChange: _propTypes.func,
  placeholder: _propTypes.string,
  rows: _propTypes.number
};
var _default = CommonTextArea;
exports.default = _default;