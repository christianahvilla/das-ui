import React from 'react';
import { render } from '@testing-library/react';
import CommonSelectPicker from './CommonSelectPicker';

describe('CommonSelectPicker', () => {
    it('should render', () => {
        render(<CommonSelectPicker />);
    });

    it('should render a badge', () => {
        const component = render(<CommonSelectPicker />);
        const selectPicker = component.baseElement.querySelector('SelectPicker');
        expect(selectPicker).toBeDefined();
    });
});
