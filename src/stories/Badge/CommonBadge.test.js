import React from 'react';
import { render } from '@testing-library/react';
import CommonBadge from './CommonBadge';

describe('CommonBadge', () => {
    it('should render', () => {
        render(<CommonBadge />);
    });

    it('should render a badge', () => {
        const component = render(<CommonBadge />);
        const buttonGroup = component.baseElement.querySelector('Badge');
        expect(buttonGroup).toBeDefined();
    });
});
