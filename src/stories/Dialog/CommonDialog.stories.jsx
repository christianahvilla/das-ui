import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs';
import { Modal, Placeholder } from 'rsuite';
import CommonDialog from './CommonDialog';
import { BACKDROP_DIALOG, COMPONENTS_SIZES, ROLE_DIALOG } from '../../helpers/types';
import CommonButton from '../Button/CommonButton';

const Wrapper = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    const { Paragraph } = Placeholder;

    const Body = () => (
        <Modal.Body>
            <Paragraph rows={80} />
        </Modal.Body>
    );

    const Header = () => (
        <Modal.Header>
            <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
    );

    const Footer = () => (
        <Modal.Footer>
            <CommonButton onClick={handleOpen} color="blue" appearance="primary" text="Ok" />
            <CommonButton onClick={handleOpen} appearance="subtle" text="Cancel" />
        </Modal.Footer>
    );

    return (
        <>
            <CommonButton onClick={handleOpen} text="Open" />
            <CommonDialog
                backdrop={select('Backgrop', BACKDROP_DIALOG, BACKDROP_DIALOG[0])}
                Body={Body}
                Footer={Footer}
                full={boolean('Full', false)}
                Header={Header}
                keyoard={boolean('Keyboard', false)}
                onClose={handleOpen}
                open={open}
                overflow={boolean('Overflow', false)}
                role={select('Role', ROLE_DIALOG, ROLE_DIALOG[1])}
                size={select('Size', COMPONENTS_SIZES, COMPONENTS_SIZES[1])}
            />
        </>
    );
};

storiesOf('Dialog', module).add('Dialog', () => (
    <Wrapper />
));
