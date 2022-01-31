import React from 'react';
import { render } from '@testing-library/react';
import CommonTag from './CommonTag';

describe('CommonTag', () => {
    it('should render', () => {
        render(<CommonTag />);
    });

    it('should render a dialog', () => {
        const component = render(<CommonTag />);
<<<<<<< HEAD
        const tag = component.baseElement.querySelector('tag');
        expect(tag).toBeDefined();
=======
        const dialog = component.baseElement.querySelector('tag');
        expect(dialog).toBeDefined();
>>>>>>> 7daab354b33be44700f9eb34c9f29db9b6a98247
    });
});
