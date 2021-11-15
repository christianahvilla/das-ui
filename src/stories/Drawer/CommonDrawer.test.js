import React from 'react';
import { render } from '@testing-library/react';
import CommonDrawer from './CommonDrawer';

describe('CommonDrawer', () => {
    it('should render', () => {
        render(<CommonDrawer expanded={true} />);
    });

    it('should render a drawer', () => {
        const component = render(<CommonDrawer expanded={true} />);
        const drawer = component.baseElement.querySelector('drawer');
        expect(drawer).toBeDefined();
    });
});
