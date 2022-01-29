import React from 'react';
import { render } from '@testing-library/react';
import CommonTag from './CommonTag';

describe('CommonTag', () => {
    it('should render', () => {
        render(<CommonTag />);
    });

    it('should render a dialog', () => {
        const component = render(<CommonTag />);
        const dialog = component.baseElement.querySelector('tag');
        expect(dialog).toBeDefined();
    });
});
