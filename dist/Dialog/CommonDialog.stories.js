"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _rsuite = require("rsuite");

var _CommonDialog = _interopRequireDefault(require("./CommonDialog"));

var _types = require("../../helpers/types");

var _CommonButton = _interopRequireDefault(require("../Button/CommonButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Wrapper = function Wrapper() {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var handleOpen = function handleOpen() {
    return setOpen(!open);
  };

  var Paragraph = _rsuite.Placeholder.Paragraph;

  var Body = function Body() {
    return /*#__PURE__*/_react.default.createElement(_rsuite.Modal.Body, null, /*#__PURE__*/_react.default.createElement(Paragraph, {
      rows: 80
    }));
  };

  var Header = function Header() {
    return /*#__PURE__*/_react.default.createElement(_rsuite.Modal.Header, null, /*#__PURE__*/_react.default.createElement(_rsuite.Modal.Title, null, "Modal Title"));
  };

  var Footer = function Footer() {
    return /*#__PURE__*/_react.default.createElement(_rsuite.Modal.Footer, null, /*#__PURE__*/_react.default.createElement(_CommonButton.default, {
      onClick: handleOpen,
      color: "blue",
      appearance: "primary",
      text: "Ok"
    }), /*#__PURE__*/_react.default.createElement(_CommonButton.default, {
      onClick: handleOpen,
      appearance: "subtle",
      text: "Cancel"
    }));
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_CommonButton.default, {
    onClick: handleOpen,
    text: "Open"
  }), /*#__PURE__*/_react.default.createElement(_CommonDialog.default, {
    backdrop: (0, _addonKnobs.select)('Backgrop', _types.BACKDROP_DIALOG, _types.BACKDROP_DIALOG[0]),
    Body: Body,
    Footer: Footer,
    full: (0, _addonKnobs.boolean)('Full', false),
    Header: Header,
    keyoard: (0, _addonKnobs.boolean)('Keyboard', false),
    onClose: handleOpen,
    open: open,
    overflow: (0, _addonKnobs.boolean)('Overflow', false),
    role: (0, _addonKnobs.select)('Role', _types.ROLE_DIALOG, _types.ROLE_DIALOG[1]),
    size: (0, _addonKnobs.select)('Size', _types.COMPONENTS_SIZES, _types.COMPONENTS_SIZES[1])
  }));
};

(0, _react2.storiesOf)('Dialog', module).add('Dialog', function () {
  return /*#__PURE__*/_react.default.createElement(Wrapper, null);
});