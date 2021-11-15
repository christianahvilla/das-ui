import React from 'react';
import { render } from '@testing-library/react';
import CommonTable from './CommonTable';
import { TABLE_COLUMNS } from '../../helpers/constants';

describe('CommonTable', () => {
    it('should render', () => {
        render(<CommonTable columns={TABLE_COLUMNS} />);
    });

    it('should render a table', () => {
        const component = render(<CommonTable columns={TABLE_COLUMNS} />);
        const table = component.baseElement.querySelector('table');
        expect(table).toBeDefined();
    });
});
