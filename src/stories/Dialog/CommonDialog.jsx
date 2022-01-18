import React from 'react';
import {
    bool,
    elementType, func, string,
} from 'prop-types';
import { Modal } from 'rsuite';

const CommonDialog = (props) => {
    const {
        backdrop,
        Body,
        ref,
        Footer,
        full,
        Header,
        keyboard,
        onClose,
        open,
        overflow,
        role,
        size,
    } = props;

    return (
        <Modal
            backdrop={backdrop}
            Body={Body}
            Footer={Footer}
            full={full}
            Header={Header}
            keyboard={keyboard}
            onClose={onClose}
            open={open}
            overflow={overflow}
            role={role}
            size={size}
            ref={ref}
        >
            {Header && <Header />}
            {Body && <Body />}
            {Footer && <Footer />}
        </Modal>
    );
};

CommonDialog.defaultProps = {
    backdrop: '',
    Body: null,
    ref: null,
    Footer: null,
    full: false,
    Header: null,
    keyboard: false,
    onClose: () => {},
    open: false,
    overflow: false,
    role: null,
    size: 'md',
};

CommonDialog.propTypes = {
    backdrop: string || bool,
    Body: elementType,
    ref: func,
    Footer: elementType,
    full: bool,
    Header: elementType,
    keyboard: bool,
    onClose: func,
    open: bool,
    overflow: bool,
    role: string,
    size: string,
};

export default CommonDialog;
