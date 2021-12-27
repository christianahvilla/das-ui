import { bool, string } from 'prop-types';
import React from 'react';
import Loader from 'rsuite/Loader';

const CommonProgress = (props) => {
    const {
        backdrop,
        center,
        content,
        size,
        speed,
    } = props;
    return (
        <Loader backdrop={backdrop} center={center} content={content} size={size} speed={speed} />
    );
};

CommonProgress.defaultProps = {
    backdrop: false,
    center: false,
    content: 'Loading...',
    size: 'md',
    speed: 'fast',
};

CommonProgress.propTypes = {
    backdrop: bool,
    center: bool,
    content: string,
    size: string,
    speed: string,
};

export default CommonProgress;
