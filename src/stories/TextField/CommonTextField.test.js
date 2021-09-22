import React from 'react';
import { render } from '@testing-library/react';
import CommonTextField from './CommonTextField';

describe('CommonTextField', () => {
    it('should render', () => {
        render(<CommonTextField />);
    });

    it('should render a text field', () => {
        const component = render(<CommonTextField />);
        const textfield = component.baseElement.querySelector('textfield');
        expect(textfield).toBeDefined();
    });
});
