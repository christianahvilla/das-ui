"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _rsuite = require("rsuite");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CommonBadge = function CommonBadge(props) {
  var color = props.color,
      content = props.content,
      maxCount = props.maxCount,
      Component = props.Component;
  return /*#__PURE__*/_react.default.createElement(_rsuite.Badge, {
    color: color,
    content: content,
    maxCount: maxCount
  }, Component && /*#__PURE__*/_react.default.createElement(Component, null));
};

CommonBadge.defaultProps = {
  color: '',
  content: null,
  maxCount: 99,
  Component: null
};
CommonBadge.propTypes = {
  color: _propTypes.string,
  content: _propTypes.number || _propTypes.string,
  maxCount: _propTypes.number,
  Component: _propTypes.elementType
};
var _default = CommonBadge;
exports.default = _default;