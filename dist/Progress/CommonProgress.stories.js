"use strict";

var _react = _interopRequireDefault(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _react2 = require("@storybook/react");

var _CommonProgress = _interopRequireDefault(require("./CommonProgress"));

var _types = require("../../helpers/types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Progress', module).add('Progress', function () {
  return /*#__PURE__*/_react.default.createElement(_CommonProgress.default, {
    content: (0, _addonKnobs.text)('Content', 'Default Loading...'),
    size: (0, _addonKnobs.select)('size', _types.COMPONENTS_SIZES, _types.COMPONENTS_SIZES[0]),
    speed: (0, _addonKnobs.select)('speed', _types.PROGRESS_SPEEDS, _types.PROGRESS_SPEEDS[0])
  });
});