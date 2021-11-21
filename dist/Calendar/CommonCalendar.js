"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _react2 = _interopRequireDefault(require("@fullcalendar/react"));

var _daygrid = _interopRequireDefault(require("@fullcalendar/daygrid"));

var _timegrid = _interopRequireDefault(require("@fullcalendar/timegrid"));

var _interaction = _interopRequireDefault(require("@fullcalendar/interaction"));

var _list = _interopRequireDefault(require("@fullcalendar/list"));

var _es = _interopRequireDefault(require("@fullcalendar/core/locales/es"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _moment = _interopRequireDefault(require("@fullcalendar/moment"));

var _propTypes = require("prop-types");

var _rsuite = require("rsuite");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyleWrapper = _styled.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    .fc-button.fc-prev-button, .fc-button.fc-next-button, .fc-button.fc-button-primary {\n        background: none;\n        border-radius: 8px;\n        font-size: 0.875rem;\n    }\n    .fc-button.fc-prev-button, .fc-button.fc-next-button {\n        border-radius: 50%;\n        color: rgb(99, 115, 129);\n        border: none;\n    }\n    .fc-button.fc-prev-button:hover, .fc-button.fc-next-button:hover {\n        border: none;\n    }\n    .fc-button-primary:hover {\n        color: rgb(99, 115, 129);\n        background-color: rgba(145, 158, 171, 0.16);\n        border: 1px solid rgba(145, 158, 171, 0.32);\n    }\n    .fc-viewDay-button, .fc-viewMonth-button, .fc-viewWeek-button, .fc-viewList-button  {\n        font-family: Material Icons!important;\n        color: rgb(145, 158, 171);\n        border: 1px solid rgba(145, 158, 171, 0.32);\n    }\n    .fc {\n        font-family: \"Public Sans\", sans-serif;\n    }\n    .fc-toolbar, .fc-col-header {\n        text-transform: capitalize;\n        color: rgb(33, 43, 54);\n    }\n    .fc-toolbar-title {\n        font-size: 1.125rem;\n    }\n    .fc-today-button {\n        background-color: #6666FA!important;\n        box-shadow: rgb(102 102 250 / 24%) 0px 8px 16px 0px;\n        border: none;\n    }\n    .fc-today-button:hover {\n        background-color: #6666FA!important;\n        box-shadow: rgb(102 102 250 / 24%) 0px 8px 16px 0px;\n        border: none;\n        color: white;\n    }\n    .fc-daygrid-day.fc-day.fc-day-today  {\n        background-color: rgba(145, 158, 171, 0.16);\n    }\n    .fc table {\n        border-top-width: 0;\n        border-left-width: 0;\n        border-right-width: 0;\n        border-bottom-width: 0;\n        font-size: 1em;\n    }\n    .fc .fc-col-header {\n        box-shadow: rgb(145 158 171 / 24%) 0px -1px 0px inset;\n    }\n    \n    .fc .fc-scrollgrid-section>* {\n        border-top-width: 0;\n        border-left-width: 0;\n        border-right-width: 0;\n        border-bottom-width: 0;\n    }\n    .fc .fc-col-header th {\n        border-color: transparent;\n    }\n    .fc .fc-view-harness {\n        flex-grow: 1;\n        position: relative;\n    }\n    .fc .fc-scrollgrid-liquid {\n        height: 100%;\n    }\n    .fc .fc-toolbar.fc-header-toolbar {\n        margin: 1.5em 1em;\n    }\n"])));

var CommonCalendar = function CommonCalendar(props) {
  var _calendarRef$current;

  var events = props.events;
  var calendarRef = (0, _react.useRef)(null);
  var calendarApi = (_calendarRef$current = calendarRef.current) === null || _calendarRef$current === void 0 ? void 0 : _calendarRef$current.getApi();
  var buttons = {
    viewDay: {
      text: 'calendar_view_day',
      click: function click() {
        calendarApi === null || calendarApi === void 0 ? void 0 : calendarApi.changeView('timeGridDay');
      }
    },
    viewMonth: {
      text: 'calendar_view_month',
      click: function click() {
        calendarApi === null || calendarApi === void 0 ? void 0 : calendarApi.changeView('dayGridMonth');
      }
    },
    viewWeek: {
      text: 'calendar_view_week',
      click: function click() {
        calendarApi === null || calendarApi === void 0 ? void 0 : calendarApi.changeView('timeGridWeek');
      }
    },
    viewList: {
      text: 'view_agenda',
      click: function click() {
        calendarApi === null || calendarApi === void 0 ? void 0 : calendarApi.changeView('listWeek');
      }
    }
  };
  return /*#__PURE__*/_react.default.createElement(_rsuite.Panel, {
    shaded: true,
    bodyFill: true
  }, /*#__PURE__*/_react.default.createElement(StyleWrapper, null, /*#__PURE__*/_react.default.createElement(_react2.default, {
    plugins: [_daygrid.default, _timegrid.default, _interaction.default, _list.default, _moment.default],
    headerToolbar: {
      left: 'viewMonth viewWeek viewDay viewList',
      center: 'title',
      right: 'prev today next'
    },
    initialView: "dayGridMonth",
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    locale: _es.default,
    slotLabelInterval: "00:15",
    slotDuration: "00:15",
    allDaySlot: false,
    slotMinTime: "09:00",
    slotMaxTime: "20:00",
    buttonIcons: true,
    nowIndicator: true,
    ref: calendarRef,
    customButtons: _objectSpread({}, buttons),
    firstDay: 0,
    hiddenDays: [0],
    stickyHeaderDates: false,
    eventTimeFormat: {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    },
    events: events,
    views: {
      dayGridWeek: {
        titleFormat: '{DD.{MM.}}YYYY'
      },
      listWeek: {
        titleFormat: '{DD.{MM.}}YYYY'
      }
    }
  })));
};

var _default = CommonCalendar;
exports.default = _default;
CommonCalendar.defaultProps = {
  events: []
};
CommonCalendar.propTypes = {
  events: (0, _propTypes.arrayOf)((0, _propTypes.shape)({}))
};