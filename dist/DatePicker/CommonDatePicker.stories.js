"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var dateFns = _interopRequireWildcard(require("date-fns"));

var _rsuite = require("rsuite");

var _locales = require("rsuite/esm/locales");

var _CommonDatePicker = _interopRequireDefault(require("./CommonDatePicker"));

var _types = require("../../helpers/types");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrapper = function Wrapper() {
  var handleChangeValue = function handleChangeValue(value) {
    // eslint-disable-next-line no-console
    console.log(value);
  };

  var getDisabledDate = function getDisabledDate(date) {
    if (dateFns.isToday(date, new Date())) {
      return false;
    }

    return dateFns.isBefore(date, new Date());
  };

  var getHiddenHours = function getHiddenHours(hour) {
    return hour < 8 || hour > 20;
  };

  var getHiddenMinutes = function getHiddenMinutes(minute) {
    return minute % 15 !== 0;
  };

  return /*#__PURE__*/_react.default.createElement(_rsuite.CustomProvider, {
    locale: _locales.esES
  }, /*#__PURE__*/_react.default.createElement(_CommonDatePicker.default, {
    appearance: (0, _addonKnobs.select)('Appearance', _types.TYPE_COMPONENTS, _types.TYPE_COMPONENTS[0]),
    format: (0, _addonKnobs.select)('Format', _types.FORMAT_DATES, _types.FORMAT_DATES[3]),
    block: (0, _addonKnobs.boolean)('Block', false),
    disabled: (0, _addonKnobs.boolean)('Disabled', false),
    disabledDate: getDisabledDate,
    onSelect: handleChangeValue,
    hideHours: getHiddenHours,
    hideMinutes: getHiddenMinutes,
    isoWeek: (0, _addonKnobs.boolean)('ISO Week', false),
    oneTap: (0, _addonKnobs.boolean)('One Tap', false),
    placeholder: (0, _addonKnobs.text)('Placeholder', '22-04-2021 12:55'),
    plaintext: (0, _addonKnobs.boolean)('Plaintext', false),
    ranges: _types.FORMAT_RANGES,
    readOnly: (0, _addonKnobs.boolean)('Read Only', false),
    size: (0, _addonKnobs.select)('Size', _types.COMPONENTS_SIZES, _types.COMPONENTS_SIZES[0])
  }));
};

(0, _react2.storiesOf)('DatePicker', module).add('DatePicker', function () {
  return /*#__PURE__*/_react.default.createElement(Wrapper, null);
});