import React from 'react';
import { render } from '@testing-library/react';
import CommonAlert from './CommonAlert';

describe('CommonAlert', () => {
    it('should render', () => {
        render(<CommonAlert />);
    });

    it('should render an Alert', () => {
        const component = render(<CommonAlert />);
        const alert = component.baseElement.querySelector('alert');
        expect(alert).toBeDefined();
    });
});
