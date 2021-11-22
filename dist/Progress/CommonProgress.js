"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = require("prop-types");

var _react = _interopRequireDefault(require("react"));

var _Loader = _interopRequireDefault(require("rsuite/Loader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CommonProgress = function CommonProgress(props) {
  var content = props.content,
      size = props.size,
      speed = props.speed;
  return /*#__PURE__*/_react.default.createElement(_Loader.default, {
    content: content,
    size: size,
    speed: speed
  });
};

CommonProgress.defaultProps = {
  content: 'Loading...',
  size: 'md',
  speed: 'fast'
};
CommonProgress.propTypes = {
  content: _propTypes.string,
  size: _propTypes.string,
  speed: _propTypes.string
};
var _default = CommonProgress;
exports.default = _default;