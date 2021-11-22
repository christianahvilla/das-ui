import React from 'react';
import { render } from '@testing-library/react';
import CommonDialog from './CommonDialog';

describe('CommonBadge', () => {
    it('should render', () => {
        render(<CommonDialog />);
    });

    it('should render a dialog', () => {
        const component = render(<CommonDialog />);
        const dialog = component.baseElement.querySelector('Dialog');
        expect(dialog).toBeDefined();
    });
});
