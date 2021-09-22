import React from 'react';
import { render } from '@testing-library/react';
import CommonSearchBar from './CommonSearchBar';

describe('CommonSearchBar', () => {
    it('should render', () => {
        render(<CommonSearchBar />);
    });

    it('should render a search bar', () => {
        const component = render(<CommonSearchBar />);
        const searchbar = component.baseElement.querySelector('searchbar');
        expect(searchbar).toBeDefined();
    });
});
