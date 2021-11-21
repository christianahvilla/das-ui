"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _rsuiteTable = require("rsuite-table");

var _rsuite = require("rsuite");

var _TableActions = _interopRequireDefault(require("./Components/TableActions"));

var _excluded = ["key", "label"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var CommonTable = function CommonTable(props) {
  var autoHeight = props.autoHeight,
      cellBordered = props.cellBordered,
      columns = props.columns,
      data = props.data,
      handleChangeLimit = props.handleChangeLimit,
      handledelete = props.handledelete,
      handleedit = props.handleedit,
      headerHeight = props.headerHeight,
      hover = props.hover,
      labelAction = props.labelAction,
      limit = props.limit,
      loading = props.loading,
      onSortColumn = props.onSortColumn,
      pagination = props.pagination,
      page = props.page,
      realData = props.realData,
      rowHeight = props.rowHeight,
      handlePage = props.handlePage,
      sortColumn = props.sortColumn,
      sortType = props.sortType,
      virtualized = props.virtualized;
  var TableHeader = columns.map(function (column) {
    var key = column.key,
        label = column.label,
        rest = _objectWithoutProperties(column, _excluded);

    return /*#__PURE__*/_react.default.createElement(_rsuiteTable.Column, _extends({}, rest, {
      key: key
    }), /*#__PURE__*/_react.default.createElement(_rsuiteTable.HeaderCell, null, label), /*#__PURE__*/_react.default.createElement(_rsuiteTable.Cell, {
      dataKey: key
    }));
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_rsuiteTable.Table, {
    hover: hover,
    virtualized: virtualized,
    autoHeight: autoHeight,
    data: data,
    cellBordered: cellBordered,
    rowHeight: rowHeight,
    headerHeight: headerHeight,
    sortColumn: sortColumn,
    sortType: sortType,
    onSortColumn: onSortColumn,
    loading: loading,
    height: 400
  }, TableHeader, /*#__PURE__*/_react.default.createElement(_rsuiteTable.Column, null, /*#__PURE__*/_react.default.createElement(_rsuiteTable.HeaderCell, null, labelAction), /*#__PURE__*/_react.default.createElement(_TableActions.default, {
    dataKey: "id",
    handledelete: handledelete,
    handleedit: handleedit
  }))), pagination && /*#__PURE__*/_react.default.createElement(_rsuite.Pagination, {
    style: {
      paddingTop: 10
    },
    prev: true,
    next: true,
    ellipsis: true,
    boundaryLinks: true,
    maxButtons: 5,
    size: "sm",
    layout: ['total', '-', 'limit', '|', 'pager', 'skip'],
    total: realData.length,
    limit: limit,
    activePage: page,
    onChangePage: handlePage,
    onChangeLimit: handleChangeLimit,
    limitOptions: [10, 20, 30]
  }));
};

CommonTable.defaultProps = {
  autoHeight: true,
  cellBordered: false,
  data: [],
  handleChangeLimit: function handleChangeLimit() {},
  handledelete: function handledelete() {},
  handleedit: function handleedit() {},
  headerHeight: 60,
  hover: true,
  labelAction: 'Acciones',
  limit: 5,
  loading: false,
  onSortColumn: function onSortColumn() {},
  page: 1,
  pagination: false,
  realData: [],
  rowHeight: 60,
  handlePage: function handlePage() {},
  sortColumn: null,
  sortType: null,
  virtualized: false
};
CommonTable.propTypes = {
  autoHeight: _propTypes.bool,
  cellBordered: _propTypes.bool,
  columns: (0, _propTypes.arrayOf)((0, _propTypes.shape)({})).isRequired,
  data: (0, _propTypes.arrayOf)((0, _propTypes.shape)({})),
  handleChangeLimit: _propTypes.func,
  handledelete: _propTypes.func,
  handleedit: _propTypes.func,
  headerHeight: _propTypes.number,
  hover: _propTypes.bool,
  labelAction: _propTypes.string,
  limit: _propTypes.number,
  loading: _propTypes.bool,
  page: _propTypes.number,
  onSortColumn: _propTypes.func,
  pagination: _propTypes.bool,
  realData: (0, _propTypes.arrayOf)((0, _propTypes.shape)({})),
  rowHeight: _propTypes.number,
  handlePage: _propTypes.func,
  sortColumn: _propTypes.string,
  sortType: _propTypes.string,
  virtualized: _propTypes.bool
};
var _default = CommonTable;
exports.default = _default;