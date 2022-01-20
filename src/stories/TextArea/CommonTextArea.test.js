import React from 'react';
import { render } from '@testing-library/react';
import CommonTextArea from './CommonTextArea';

describe('CommonTextArea', () => {
    it('should render', () => {
        render(<CommonTextArea />);
    });

    it('should render a textarea', () => {
        const component = render(<CommonTextArea />);
        const textfield = component.baseElement.querySelector('textarea');
        expect(textfield).toBeDefined();
    });
});
