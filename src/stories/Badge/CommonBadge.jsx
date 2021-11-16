import React from 'react';
import {
    elementType, number, string,
} from 'prop-types';
import { Badge } from 'rsuite';

const CommonBadge = (props) => {
    const {
        color,
        content,
        maxCount,
        Component,
    } = props;

    return (
        <Badge
            color={color}
            content={content}
            maxCount={maxCount}
        >
            {Component && <Component />}
        </Badge>
    );
};

CommonBadge.defaultProps = {
    color: '',
    content: null,
    maxCount: 99,
    Component: null,
};

CommonBadge.propTypes = {
    color: string,
    content: number || string,
    maxCount: number,
    Component: elementType,
};

export default CommonBadge;
