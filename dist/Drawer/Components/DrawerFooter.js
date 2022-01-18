"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = require("prop-types");

var _react = _interopRequireDefault(require("react"));

var _rsuite = require("rsuite");

var _More = _interopRequireDefault(require("@rsuite/icons/More"));

var _Close = _interopRequireDefault(require("@rsuite/icons/Close"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DrawerFooter = function DrawerFooter(props) {
  var expanded = props.expanded,
      onChange = props.onChange;
  return /*#__PURE__*/_react.default.createElement(_rsuite.Navbar, {
    appearance: "subtle",
    className: "nav-toggle"
  }, /*#__PURE__*/_react.default.createElement(_rsuite.Nav, {
    pullRight: true
  }, /*#__PURE__*/_react.default.createElement(_rsuite.Nav.Item, {
    onClick: onChange,
    style: {
      width: 56,
      textAlign: 'center'
    }
  }, expanded ? /*#__PURE__*/_react.default.createElement(_Close.default, null) : /*#__PURE__*/_react.default.createElement(_More.default, null))));
};

DrawerFooter.defaultProps = {
  expanded: false
};
DrawerFooter.propTypes = {
  expanded: _propTypes.bool,
  onChange: _propTypes.func.isRequired
};
var _default = DrawerFooter;
exports.default = _default;