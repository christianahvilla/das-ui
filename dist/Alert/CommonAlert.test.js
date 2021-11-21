"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _CommonAlert = _interopRequireDefault(require("./CommonAlert"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('CommonAlert', function () {
  it('should render', function () {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_CommonAlert.default, null));
  });
  it('should render an Alert', function () {
    var component = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_CommonAlert.default, null));
    var alert = component.baseElement.querySelector('alert');
    expect(alert).toBeDefined();
  });
});