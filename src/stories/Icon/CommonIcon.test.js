import React from 'react';
import { render } from '@testing-library/react';
import CommonIcon from './CommonIcon';

describe('CommonIcon', () => {
    it('should render', () => {
        render(<CommonIcon />);
    });

    it('should render a button', () => {
        const component = render(<CommonIcon kind="plus" />);
        const icon = component.baseElement.querySelector('svg');
        expect(icon).toBeDefined();
    });
});
