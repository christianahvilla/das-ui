import React from 'react';
import { render } from '@testing-library/react';
import CommonButtonToolBar from './CommonButtonToolBar';
import { Buttons } from '../../helpers/constants';

describe('CommonButtonToolBar', () => {
    it('should render', () => {
        render(<CommonButtonToolBar buttons={Buttons} size="sm" />);
    });

    it('should render a button toolbar', () => {
        const component = render(<CommonButtonToolBar buttons={Buttons} size="sm" />);
        const buttonGroup = component.baseElement.querySelector('Button Toolbar');
        expect(buttonGroup).toBeDefined();
    });
});
