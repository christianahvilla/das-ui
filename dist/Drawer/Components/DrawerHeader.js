"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = require("prop-types");

var _react = _interopRequireDefault(require("react"));

var _rsuite = require("rsuite");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DrawerHeader = function DrawerHeader(props) {
  var expanded = props.expanded,
      imageSrc = props.imageSrc,
      name = props.name,
      type = props.type;
  return /*#__PURE__*/_react.default.createElement(_rsuite.FlexboxGrid, {
    align: "middle",
    style: {
      width: '80%',
      backgroundColor: expanded ? '#F2F3F5' : 'white',
      margin: '40px 20px',
      padding: 10,
      marginLeft: expanded ? 20 : 0
    }
  }, /*#__PURE__*/_react.default.createElement(_rsuite.FlexboxGrid.Item, {
    colspan: 4,
    style: {
      width: '20%'
    }
  }, /*#__PURE__*/_react.default.createElement(_rsuite.Avatar, {
    circle: true,
    src: imageSrc,
    size: expanded ? 'md' : 'sm'
  })), /*#__PURE__*/_react.default.createElement(_rsuite.FlexboxGrid.Item, {
    colspan: 8,
    style: {
      paddingLeft: 20,
      width: '80%'
    }
  }, expanded && /*#__PURE__*/_react.default.createElement(_rsuite.Content, null, /*#__PURE__*/_react.default.createElement(_rsuite.Content, {
    style: {
      fontWeight: 'bold'
    }
  }, name), /*#__PURE__*/_react.default.createElement(_rsuite.Content, {
    style: {
      fontSize: 12
    }
  }, type))));
};

DrawerHeader.propTypes = {
  expanded: _propTypes.bool.isRequired,
  imageSrc: _propTypes.string.isRequired,
  name: _propTypes.string.isRequired,
  type: _propTypes.string.isRequired
};
var _default = DrawerHeader;
exports.default = _default;