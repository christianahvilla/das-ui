import React from 'react';
import { render } from '@testing-library/react';
import CommonSnackBar from './CommonSnackBar';

describe('CommonSnackBar', () => {
    it('should render', () => {
        render(<CommonSnackBar />);
    });

    it('should render an SnackBar', () => {
        const component = render(<CommonSnackBar />);
        const snackBar = component.baseElement.querySelector('snackBar');
        expect(snackBar).toBeDefined();
    });
});
