"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _rsuite = require("rsuite");

var _locales = require("rsuite/esm/locales");

var _CommonInputPicker = _interopRequireDefault(require("./CommonInputPicker"));

var _types = require("../../helpers/types");

var _constants = require("../../helpers/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrapper = function Wrapper() {
  var handleChangeValue = function handleChangeValue(value) {
    // eslint-disable-next-line no-console
    console.log(value);
  };

  return /*#__PURE__*/_react.default.createElement(_rsuite.CustomProvider, {
    locale: _locales.esES
  }, /*#__PURE__*/_react.default.createElement(_CommonInputPicker.default, {
    appearance: (0, _addonKnobs.select)('Type select', _types.TYPE_COMPONENTS, _types.TYPE_COMPONENTS[0]),
    block: (0, _addonKnobs.boolean)('Block', false),
    data: _constants.FAKE_DATA_SELECT,
    disabled: (0, _addonKnobs.boolean)('Disabled', false),
    cleanable: (0, _addonKnobs.boolean)('Cleanable', true),
    onChange: handleChangeValue,
    plaintext: (0, _addonKnobs.boolean)('Plaintext', false),
    readOnly: (0, _addonKnobs.boolean)('Read Only', false),
    size: (0, _addonKnobs.select)('Size', _types.COMPONENTS_SIZES, _types.COMPONENTS_SIZES[0]),
    selectWidth: (0, _addonKnobs.number)('Width', 224)
  }));
};

(0, _react2.storiesOf)('InputPicker', module).add('InputPicker', function () {
  return /*#__PURE__*/_react.default.createElement(Wrapper, null);
});