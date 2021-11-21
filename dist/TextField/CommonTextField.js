"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Input = _interopRequireDefault(require("rsuite/Input"));

var _propTypes = require("prop-types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CommonTextField = function CommonTextField(props) {
  var handleChange = props.handleChange,
      placeholder = props.placeholder;
  return /*#__PURE__*/_react.default.createElement(_Input.default, {
    placeholder: placeholder,
    onChange: handleChange
  });
};

CommonTextField.defaultProps = {
  handleChange: function handleChange() {},
  placeholder: 'Default Input'
};
CommonTextField.propTypes = {
  handleChange: _propTypes.func,
  placeholder: _propTypes.string
};
var _default = CommonTextField;
exports.default = _default;