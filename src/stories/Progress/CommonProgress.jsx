import { string } from 'prop-types';
import React from 'react';
import Loader from 'rsuite/Loader';

const CommonProgress = (props) => {
    const {
        content,
        size,
        speed,
    } = props;
    return (
        <Loader content={content} size={size} speed={speed} />
    );
};

CommonProgress.defaultProps = {
    content: 'Loading...',
    size: 'md',
    speed: 'fast',
};

CommonProgress.propTypes = {
    content: string,
    size: string,
    speed: string,
};

export default CommonProgress;
