import React from 'react';
import { render } from '@testing-library/react';
import CommonPaper from './CommonPaper';

describe('CommonPaper', () => {
    it('should render', () => {
        render(<CommonPaper />);
    });

    it('should render a paper', () => {
        const component = render(<CommonPaper />);
        const paper = component.baseElement.querySelector('div');
        expect(paper).toBeDefined();
    });
});
