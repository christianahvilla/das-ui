"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _rsuite = require("rsuite");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CommonDialog = function CommonDialog(props) {
  var backdrop = props.backdrop,
      Body = props.Body,
      Footer = props.Footer,
      full = props.full,
      Header = props.Header,
      keyoard = props.keyoard,
      onClose = props.onClose,
      open = props.open,
      overflow = props.overflow,
      role = props.role,
      size = props.size;
  return /*#__PURE__*/_react.default.createElement(_rsuite.Modal, {
    backdrop: backdrop,
    Body: Body,
    Footer: Footer,
    full: full,
    Header: Header,
    keyoard: keyoard,
    onClose: onClose,
    open: open,
    overflow: overflow,
    role: role,
    size: size
  }, Header && /*#__PURE__*/_react.default.createElement(Header, null), Body && /*#__PURE__*/_react.default.createElement(Body, null), Footer && /*#__PURE__*/_react.default.createElement(Footer, null));
};

CommonDialog.defaultProps = {
  backdrop: '',
  Body: null,
  Footer: null,
  full: false,
  Header: null,
  keyoard: false,
  onClose: function onClose() {},
  open: false,
  overflow: false,
  role: null,
  size: 'md'
};
CommonDialog.propTypes = {
  backdrop: _propTypes.string || _propTypes.bool,
  Body: _propTypes.elementType,
  Footer: _propTypes.elementType,
  full: _propTypes.bool,
  Header: _propTypes.elementType,
  keyoard: _propTypes.bool,
  onClose: _propTypes.func,
  open: _propTypes.bool,
  overflow: _propTypes.bool,
  role: _propTypes.string,
  size: _propTypes.string
};
var _default = CommonDialog;
exports.default = _default;