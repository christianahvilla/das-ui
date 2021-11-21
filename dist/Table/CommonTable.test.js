"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _CommonTable = _interopRequireDefault(require("./CommonTable"));

var _constants = require("../../helpers/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('CommonTable', function () {
  it('should render', function () {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_CommonTable.default, {
      columns: _constants.TABLE_COLUMNS
    }));
  });
  it('should render a table', function () {
    var component = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_CommonTable.default, {
      columns: _constants.TABLE_COLUMNS
    }));
    var table = component.baseElement.querySelector('table');
    expect(table).toBeDefined();
  });
});