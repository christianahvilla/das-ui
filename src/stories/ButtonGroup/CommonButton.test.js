import React from 'react';
import { render } from '@testing-library/react';
import CommonButtonGroup from './CommonButtonGroup';
import { BUTTONS } from '../../helpers/constants';

describe('CommonButtonGroup', () => {
    it('should render', () => {
        render(<CommonButtonGroup buttons={BUTTONS} size="sm" />);
    });

    it('should render a buttongroup', () => {
        const component = render(<CommonButtonGroup buttons={BUTTONS} size="sm" />);
        const buttonGroup = component.baseElement.querySelector('Button Group');
        expect(buttonGroup).toBeDefined();
    });
});
