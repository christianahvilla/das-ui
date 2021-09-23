import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number } from '@storybook/addon-knobs';
import CommonTable from './CommonTable';
import { MOCK_DATA, TABLE_COLUMNS } from '../../helpers/constants';

const Wrapper = () => {
    const [pageSize, setPageSize] = useState(5);

    const handlePageSize = (newPageSize) => setPageSize(newPageSize);

    return (
        <CommonTable
            onPageSizeChange={handlePageSize}
            pageSize={pageSize}
            pagination={boolean('Pagination', true)}
            tableHeight={number('Height', 250)}
            columns={TABLE_COLUMNS}
            rows={MOCK_DATA}
        />
    );
};

storiesOf('Table', module).add('Table', () => (
    <Wrapper />
));
