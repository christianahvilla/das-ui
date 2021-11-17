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
        Footer,
        full,
        Header,
        keyoard,
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
            keyoard={keyoard}
            onClose={onClose}
            open={open}
            overflow={overflow}
            role={role}
            size={size}
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
    Footer: null,
    full: false,
    Header: null,
    keyoard: false,
    onClose: () => {},
    open: false,
    overflow: false,
    role: null,
    size: 'md',
};

CommonDialog.propTypes = {
    backdrop: string || bool,
    Body: elementType,
    Footer: elementType,
    full: bool,
    Header: elementType,
    keyoard: bool,
    onClose: func,
    open: bool,
    overflow: bool,
    role: string,
    size: string,
};

export default CommonDialog;
