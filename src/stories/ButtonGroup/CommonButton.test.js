import React from 'react';
import { render } from '@testing-library/react';
import CommonButtonGroup from './CommonButtonGroup';
import { Buttons } from '../../helpers/constants';

describe('CommonButtonGroup', () => {
    it('should render', () => {
        render(<CommonButtonGroup buttons={Buttons} size="sm" />);
    });

    it('should render a buttongroup', () => {
        const component = render(<CommonButtonGroup buttons={Buttons} size="sm" />);
        const buttonGroup = component.baseElement.querySelector('Button Group');
        expect(buttonGroup).toBeDefined();
    });
});
