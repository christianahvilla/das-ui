import React from 'react';
import { render } from '@testing-library/react';
import CommonButton from './CommonButton';

describe('CommonButton', () => {
    it('should render', () => {
        render(<CommonButton />);
    });

    it('should render a button', () => {
        const component = render(<CommonButton />);
        const button = component.baseElement.querySelector('button');
        expect(button).toBeDefined();
    });
});
