import React from 'react';
import { render } from '@testing-library/react';
import CommonChip from './CommonChip';

describe('CommonChip', () => {
    it('should render', () => {
        render(<CommonChip color="error" />);
    });

    it('should render a chip', () => {
        const component = render(<CommonChip color="error" />);
        const chip = component.baseElement.querySelector('chip');
        expect(chip).toBeDefined();
    });
});
