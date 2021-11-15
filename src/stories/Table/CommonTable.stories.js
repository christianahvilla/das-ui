import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number, text } from '@storybook/addon-knobs';
import CommonTable from './CommonTable';
import { MOCK_DATA, TABLE_COLUMNS } from '../../helpers/constants';

const Wrapper = () => {
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [sortColumn, setSortColumn] = useState();
    const [sortType, setSortType] = useState();
    const [loading, setLoading] = useState(false);

    const getData = () => {
        if (sortColumn && sortType) {
            return MOCK_DATA.sort((a, b) => {
                let x = a[sortColumn];
                let y = b[sortColumn];
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

        return MOCK_DATA;
    };

    const filteredData = getData().filter((_item, index) => {
        const start = limit * (page - 1);
        const end = start + limit;
        return index >= start && index < end;
    });

    const handleSortColumn = (sortedColumn, sortedType) => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSortColumn(sortedColumn);
            setSortType(sortedType);
        }, 500);
    };

    const handleChangeLimit = (value) => {
        setPage(1);
        setLimit(value);
    };

    const handlePage = (value) => {
        setPage(value);
    };

    const handleAction = (objetc) => {
        // eslint-disable-next-line no-alert
        alert(`id:${objetc}`);
    };

    return (
        <CommonTable
            autoHeight={boolean('Autho Height', false)}
            cellBordered={boolean('Cell Bordered', false)}
            columns={TABLE_COLUMNS}
            data={filteredData}
            realData={MOCK_DATA}
            handleChangeLimit={handleChangeLimit}
            handleDelete={handleAction}
            handleEdit={handleAction}
            headerHeight={number('Header Height', 55)}
            hover={boolean('Hover', true)}
            labelAction={text('Label Action', 'Aciones')}
            loading={loading}
            limit={limit}
            onSortColumn={handleSortColumn}
            page={page}
            pagination={boolean('Pagination', true)}
            rowHeight={number('Row Height', 50)}
            handlePage={handlePage}
            sortColumn={sortColumn}
            sortType={sortType}
            virtualized={boolean('Virtualized', true)}
        />
    );
};

storiesOf('Table', module).add('Table', () => (
    <Wrapper />
));
