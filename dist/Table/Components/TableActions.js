"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _rsuiteTable = require("rsuite-table");

var _rsuite = require("rsuite");

var _Trash = _interopRequireDefault(require("@rsuite/icons/Trash"));

var _Edit = _interopRequireDefault(require("@rsuite/icons/Edit"));

var _propTypes = require("prop-types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TableActions = function TableActions(props) {
  var dataKey = props.dataKey,
      handleedit = props.handleedit,
      handledelete = props.handledelete,
      rowData = props.rowData;

  var newProps = _objectSpread({}, props);

  delete newProps[handleedit];
  delete newProps[handledelete];

  var onDelete = function onDelete() {
    return handledelete(rowData[dataKey]);
  };

  var onEdit = function onEdit() {
    return handleedit(rowData[dataKey]);
  };

  return /*#__PURE__*/_react.default.createElement(_rsuiteTable.Cell, _extends({}, newProps, {
    style: {
      paddingTop: 5,
      paddingBottom: 5
    }
  }), /*#__PURE__*/_react.default.createElement(_rsuite.IconButton, {
    appearance: "subtle",
    onClick: onEdit,
    icon: /*#__PURE__*/_react.default.createElement(_Edit.default, null)
  }), /*#__PURE__*/_react.default.createElement(_rsuite.IconButton, {
    appearance: "subtle",
    onClick: onDelete,
    icon: /*#__PURE__*/_react.default.createElement(_Trash.default, null)
  }));
};

TableActions.propTypes = {
  rowData: {}
};
TableActions.propTypes = {
  dataKey: _propTypes.string.isRequired,
  handleedit: _propTypes.func,
  handledelete: _propTypes.func,
  // eslint-disable-next-line react/require-default-props
  rowData: (0, _propTypes.shape)({})
};
TableActions.defaultProps = {
  handleedit: function handleedit() {},
  handledelete: function handledelete() {}
};
var _default = TableActions;
exports.default = _default;