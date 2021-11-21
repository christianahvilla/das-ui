"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _rsuite = require("rsuite");

var _Calendar = _interopRequireDefault(require("@rsuite/icons/Calendar"));

var _Peoples = _interopRequireDefault(require("@rsuite/icons/Peoples"));

var _DocPass = _interopRequireDefault(require("@rsuite/icons/DocPass"));

var _Speaker = _interopRequireDefault(require("@rsuite/icons/Speaker"));

var _Trend = _interopRequireDefault(require("@rsuite/icons/Trend"));

var _ChangeList = _interopRequireDefault(require("@rsuite/icons/ChangeList"));

var _OperatePeople = _interopRequireDefault(require("@rsuite/icons/OperatePeople"));

var _Storage = _interopRequireDefault(require("@rsuite/icons/Storage"));

var _Dashboard = _interopRequireDefault(require("@rsuite/icons/Dashboard"));

var _propTypes = require("prop-types");

var _DrawerHeader = _interopRequireDefault(require("./Components/DrawerHeader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var panelStyles = {
  padding: '15px 20px',
  color: '#aaa'
};
var activeStyle = {
  backgroundColor: '#4F95FF26',
  borderRight: '10px solid #2179FC50'
};
var navItemStyle = {
  textDecoration: 'none'
};
var drawerStyle = {
  borderStyle: 'solid',
  borderWidth: 'thin',
  borderColor: '#e4e4e4'
};

var CommonDrawer = function CommonDrawer(props) {
  var activeKey = props.activeKey,
      defaultOpenKeys = props.defaultOpenKeys,
      expanded = props.expanded,
      name = props.name,
      setActiveKey = props.setActiveKey,
      type = props.type,
      imageSrc = props.imageSrc;
  return /*#__PURE__*/_react.default.createElement(_rsuite.Sidenav, {
    expanded: expanded,
    defaultOpenKeys: defaultOpenKeys,
    appearance: "subtle",
    style: drawerStyle
  }, /*#__PURE__*/_react.default.createElement(_rsuite.Sidenav.Body, null, /*#__PURE__*/_react.default.createElement(_DrawerHeader.default, {
    imageSrc: imageSrc,
    name: name,
    type: type,
    expanded: expanded
  }), /*#__PURE__*/_react.default.createElement(_rsuite.Nav, {
    activeKey: activeKey,
    onSelect: setActiveKey
  }, expanded && /*#__PURE__*/_react.default.createElement(_rsuite.Dropdown.Item, {
    panel: true,
    style: panelStyles
  }, "General"), /*#__PURE__*/_react.default.createElement(_rsuite.Nav.Item, {
    eventKey: "/home",
    style: _objectSpread(_objectSpread({}, navItemStyle), activeKey === '/home' ? activeStyle : null),
    icon: /*#__PURE__*/_react.default.createElement(_Dashboard.default, null)
  }, "Inicio"), /*#__PURE__*/_react.default.createElement(_rsuite.Nav.Item, {
    eventKey: "/agenda",
    style: _objectSpread(_objectSpread({}, navItemStyle), activeKey === '/agenda' ? activeStyle : null),
    icon: /*#__PURE__*/_react.default.createElement(_Calendar.default, null)
  }, "Agenda"), expanded && /*#__PURE__*/_react.default.createElement(_rsuite.Dropdown.Item, {
    panel: true,
    style: panelStyles
  }, "Consultorio"), /*#__PURE__*/_react.default.createElement(_rsuite.Nav.Item, {
    eventKey: "/patiens",
    style: _objectSpread(_objectSpread({}, navItemStyle), activeKey === '/patiens' ? activeStyle : null),
    icon: /*#__PURE__*/_react.default.createElement(_Peoples.default, null)
  }, "Pacientes"), /*#__PURE__*/_react.default.createElement(_rsuite.Nav.Item, {
    eventKey: "/treatments",
    style: _objectSpread(_objectSpread({}, navItemStyle), activeKey === '/treatments' ? activeStyle : null),
    icon: /*#__PURE__*/_react.default.createElement(_DocPass.default, null)
  }, "Tratamientos"), /*#__PURE__*/_react.default.createElement(_rsuite.Nav.Item, {
    eventKey: "/recomendations",
    style: _objectSpread(_objectSpread({}, navItemStyle), activeKey === '/recomendations' ? activeStyle : null),
    icon: /*#__PURE__*/_react.default.createElement(_Speaker.default, null)
  }, "Recomendaciones"), expanded && /*#__PURE__*/_react.default.createElement(_rsuite.Dropdown.Item, {
    panel: true,
    style: panelStyles
  }, "Administraci\xF3n"), /*#__PURE__*/_react.default.createElement(_rsuite.Nav.Item, {
    eventKey: "/inventory",
    style: _objectSpread(_objectSpread({}, navItemStyle), activeKey === '/inventory' ? activeStyle : null),
    icon: /*#__PURE__*/_react.default.createElement(_Storage.default, null)
  }, "Invnetario"), /*#__PURE__*/_react.default.createElement(_rsuite.Nav.Item, {
    eventKey: "/trends",
    style: _objectSpread(_objectSpread({}, navItemStyle), activeKey === '/trends' ? activeStyle : null),
    icon: /*#__PURE__*/_react.default.createElement(_Trend.default, null)
  }, "Ingresos/Egresos"), /*#__PURE__*/_react.default.createElement(_rsuite.Nav.Item, {
    eventKey: "/providers",
    style: _objectSpread(_objectSpread({}, navItemStyle), activeKey === '/providers' ? activeStyle : null),
    icon: /*#__PURE__*/_react.default.createElement(_OperatePeople.default, null)
  }, "Proveedores"), /*#__PURE__*/_react.default.createElement(_rsuite.Nav.Item, {
    eventKey: "/bills",
    style: _objectSpread(_objectSpread({}, navItemStyle), activeKey === '/bills' ? activeStyle : null),
    icon: /*#__PURE__*/_react.default.createElement(_ChangeList.default, null)
  }, "Recibos"))));
};

CommonDrawer.defaultProps = {
  activeKey: '',
  defaultOpenKeys: [],
  expanded: false,
  name: '',
  setActiveKey: function setActiveKey() {},
  type: '',
  imageSrc: ''
};
CommonDrawer.propTypes = {
  activeKey: _propTypes.string,
  defaultOpenKeys: (0, _propTypes.arrayOf)(_propTypes.string),
  expanded: _propTypes.bool,
  name: _propTypes.string,
  setActiveKey: _propTypes.func,
  type: _propTypes.string,
  imageSrc: _propTypes.string
};
var _default = CommonDrawer;
exports.default = _default;