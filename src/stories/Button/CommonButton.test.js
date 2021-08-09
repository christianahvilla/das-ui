import React from 'react';
import { render } from '@testing-library/react';
import CommonButton from './CommonButton';

describe("CommonButton", () => {
    const props = {
        variant: 'contained',
        color: 'primary',
        text: 'Hello World',
    };

    it('should render', () => {
        render(<CommonButton></CommonButton>);
    });

    it('should render a button', () => {
        const component = render(<CommonButton></CommonButton>);
        const button = component.baseElement.querySelector('button');
        expect(button).toBeDefined();
    });
})