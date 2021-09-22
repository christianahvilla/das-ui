import React from 'react';
import { render } from '@testing-library/react';
import CommonProgress from './CommonProgress';

describe('CommonProgress', () => {
    it('should render', () => {
        render(<CommonProgress />);
    });

    it('should render a progress', () => {
        const component = render(<CommonProgress />);
        const progress = component.baseElement.querySelector('progress');
        expect(progress).toBeDefined();
    });
});
