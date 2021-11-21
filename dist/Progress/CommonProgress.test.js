"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _CommonProgress = _interopRequireDefault(require("./CommonProgress"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('CommonProgress', function () {
  it('should render', function () {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_CommonProgress.default, null));
  });
  it('should render a progress', function () {
    var component = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_CommonProgress.default, null));
    var progress = component.baseElement.querySelector('progress');
    expect(progress).toBeDefined();
  });
});