import React from 'react';
import { render } from '@testing-library/react';
import CommonCalendar from './CommonCalendar';

describe('CommonCalendar', () => {
    it('should render', () => {
        render(<CommonCalendar />);
    });

    it('should render a calendar', () => {
        const component = render(<CommonCalendar />);
        const calendar = component.baseElement.querySelector('calendar');
        expect(calendar).toBeDefined();
    });
});
