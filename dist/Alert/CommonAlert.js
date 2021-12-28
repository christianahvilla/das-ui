"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Message = _interopRequireDefault(require("rsuite/Message"));

var _propTypes = require("prop-types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var CommonAlert = function CommonAlert(props) {
  var closable = props.closable,
      duration = props.duration,
      header = props.header,
      key = props.key,
      msg = props.msg,
      onClose = props.onClose,
      showIcon = props.showIcon,
      type = props.type;
  return /*#__PURE__*/React.createElement(_Message.default, {
    duration: duration,
    key: key,
    onClose: onClose,
    closable: closable,
    showIcon: showIcon,
    type: type,
    header: header
  }, msg);
};

CommonAlert.defaultProps = {
  closable: true,
  duration: 2000,
  header: 'Informational',
  key: '',
  msg: 'Default Message for Alert',
  onClose: null,
  showIcon: true,
  type: 'info'
};
CommonAlert.propTypes = {
  closable: _propTypes.bool,
  duration: _propTypes.number,
  header: _propTypes.string,
  key: _propTypes.string,
  msg: _propTypes.string,
  onClose: _propTypes.func,
  showIcon: _propTypes.bool,
  type: _propTypes.string
};
var _default = CommonAlert;
exports.default = _default;