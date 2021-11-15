import React from 'react';
import { render } from '@testing-library/react';
import CommonDatePicker from './CommonDatePicker';

describe('CommonTextField', () => {
    it('should render', () => {
        render(<CommonDatePicker />);
    });

    it('should render a date picker', () => {
        const component = render(<CommonDatePicker />);
        const datePicker = component.baseElement.querySelector('date picker');
        expect(datePicker).toBeDefined();
    });
});
