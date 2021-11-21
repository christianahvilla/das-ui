"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _CommonTable = _interopRequireDefault(require("./CommonTable"));

var _constants = require("../../helpers/constants");

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
  var _useState = (0, _react.useState)(10),
      _useState2 = _slicedToArray(_useState, 2),
      limit = _useState2[0],
      setLimit = _useState2[1];

  var _useState3 = (0, _react.useState)(1),
      _useState4 = _slicedToArray(_useState3, 2),
      page = _useState4[0],
      setPage = _useState4[1];

  var _useState5 = (0, _react.useState)(),
      _useState6 = _slicedToArray(_useState5, 2),
      sortColumn = _useState6[0],
      setSortColumn = _useState6[1];

  var _useState7 = (0, _react.useState)(),
      _useState8 = _slicedToArray(_useState7, 2),
      sortType = _useState8[0],
      setSortType = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      loading = _useState10[0],
      setLoading = _useState10[1];

  var getData = function getData() {
    if (sortColumn && sortType) {
      return _constants.MOCK_DATA.sort(function (a, b) {
        var x = a[sortColumn];
        var y = b[sortColumn];

        if (typeof x === 'string') {
          x = x.charCodeAt();
        }

        if (typeof y === 'string') {
          y = y.charCodeAt();
        }

        if (sortType === 'asc') {
          return x - y;
        }

        return y - x;
      });
    }

    return _constants.MOCK_DATA;
  };

  var filteredData = getData().filter(function (_item, index) {
    var start = limit * (page - 1);
    var end = start + limit;
    return index >= start && index < end;
  });

  var handleSortColumn = function handleSortColumn(sortedColumn, sortedType) {
    setLoading(true);
    setTimeout(function () {
      setLoading(false);
      setSortColumn(sortedColumn);
      setSortType(sortedType);
    }, 500);
  };

  var handleChangeLimit = function handleChangeLimit(value) {
    setPage(1);
    setLimit(value);
  };

  var handlePage = function handlePage(value) {
    setPage(value);
  };

  var handleAction = function handleAction(objetc) {
    // eslint-disable-next-line no-alert
    alert("id:".concat(objetc));
  };

  return /*#__PURE__*/_react.default.createElement(_CommonTable.default, {
    autoHeight: (0, _addonKnobs.boolean)('Autho Height', false),
    cellBordered: (0, _addonKnobs.boolean)('Cell Bordered', false),
    columns: _constants.TABLE_COLUMNS,
    data: filteredData,
    realData: _constants.MOCK_DATA,
    handleChangeLimit: handleChangeLimit,
    handledelete: handleAction,
    handleedit: handleAction,
    headerHeight: (0, _addonKnobs.number)('Header Height', 55),
    hover: (0, _addonKnobs.boolean)('Hover', true),
    labelAction: (0, _addonKnobs.text)('Label Action', 'Aciones'),
    loading: loading,
    limit: limit,
    onSortColumn: handleSortColumn,
    page: page,
    pagination: (0, _addonKnobs.boolean)('Pagination', true),
    rowHeight: (0, _addonKnobs.number)('Row Height', 50),
    handlePage: handlePage,
    sortColumn: sortColumn,
    sortType: sortType,
    virtualized: (0, _addonKnobs.boolean)('Virtualized', true)
  });
};

(0, _react2.storiesOf)('Table', module).add('Table', function () {
  return /*#__PURE__*/_react.default.createElement(Wrapper, null);
});