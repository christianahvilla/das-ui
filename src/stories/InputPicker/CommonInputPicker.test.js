import React from 'react';
import { render } from '@testing-library/react';
import CommonInputPicker from './CommonInputPicker';

describe('CommonSelectPicker', () => {
    it('should render', () => {
        render(<CommonInputPicker />);
    });

    it('should render a badge', () => {
        const component = render(<CommonInputPicker />);
        const inputPicker = component.baseElement.querySelector('InputPicker');
        expect(inputPicker).toBeDefined();
    });
});
