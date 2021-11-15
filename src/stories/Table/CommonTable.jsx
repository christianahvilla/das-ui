import React from 'react';
import {
    arrayOf, bool, func, number, shape, string,
} from 'prop-types';
import {
    Table, Column, HeaderCell, Cell,
} from 'rsuite-table';
import { Pagination } from 'rsuite';
import TableActions from './Components/TableActions';

const CommonTable = (props) => {
    const {
        autoHeight,
        cellBordered,
        columns,
        data,
        handleChangeLimit,
        handleDelete,
        handleEdit,
        headerHeight,
        hover,
        labelAction,
        limit,
        loading,
        onSortColumn,
        pagination,
        page,
        realData,
        rowHeight,
        handlePage,
        sortColumn,
        sortType,
        virtualized,
    } = props;

    const TableHeader = columns.map((column) => {
        const { key, label, ...rest } = column;
        return (
            <Column {...rest} key={key}>
                <HeaderCell>{label}</HeaderCell>
                <Cell dataKey={key} />
            </Column>
        );
    });

    return (
        <>
            <Table
                hover={hover}
                virtualized={virtualized}
                autoHeight={autoHeight}
                data={data}
                cellBordered={cellBordered}
                rowHeight={rowHeight}
                headerHeight={headerHeight}
                sortColumn={sortColumn}
                sortType={sortType}
                onSortColumn={onSortColumn}
                loading={loading}
                height={400}
            >
                {TableHeader}
                <Column>
                    <HeaderCell>{labelAction}</HeaderCell>
                    <TableActions dataKey="id" handleDelete={handleDelete} handleEdit={handleEdit} />
                </Column>
            </Table>
            {pagination && (
                <Pagination
                    style={{ paddingTop: 10 }}
                    prev
                    next
                    ellipsis
                    boundaryLinks
                    maxButtons={5}
                    size="sm"
                    layout={['total', '-', 'limit', '|', 'pager', 'skip']}
                    total={realData.length}
                    limit={limit}
                    activePage={page}
                    onChangePage={handlePage}
                    onChangeLimit={handleChangeLimit}
                    limitOptions={[10, 20, 30]}
                />
            )}
        </>
    );
};

CommonTable.defaultProps = {
    autoHeight: true,
    cellBordered: false,
    data: [],
    handleChangeLimit: () => {},
    handleDelete: () => {},
    handleEdit: () => {},
    headerHeight: 60,
    hover: true,
    labelAction: 'Acciones',
    limit: 5,
    loading: false,
    onSortColumn: () => {},
    page: 1,
    pagination: false,
    realData: [],
    rowHeight: 60,
    handlePage: () => {},
    sortColumn: null,
    sortType: null,
    virtualized: false,
};

CommonTable.propTypes = {
    autoHeight: bool,
    cellBordered: bool,
    columns: arrayOf(shape({})).isRequired,
    data: arrayOf(shape({})),
    handleChangeLimit: func,
    handleDelete: func,
    handleEdit: func,
    headerHeight: number,
    hover: bool,
    labelAction: string,
    limit: number,
    loading: bool,
    page: number,
    onSortColumn: func,
    pagination: bool,
    realData: arrayOf(shape({})),
    rowHeight: number,
    handlePage: func,
    sortColumn: string,
    sortType: string,
    virtualized: bool,
};

export default CommonTable;
