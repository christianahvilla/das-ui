import React from 'react';
import { render } from '@testing-library/react';
import CommonCheckbox from './CommonCheckbox';

describe('CommonCheckbox', () => {
    it('should render', () => {
        render(<CommonCheckbox id="checkbox" />);
    });

    it('should render a checkbox', () => {
        const component = render(<CommonCheckbox id="checkbox" />);
        const checkbox = component.baseElement.querySelector('input');
        expect(checkbox).toBeDefined();
    });
});
