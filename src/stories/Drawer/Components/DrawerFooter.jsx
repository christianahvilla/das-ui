import { bool, func } from 'prop-types';
import React from 'react';
import { Nav, Navbar } from 'rsuite';
import MoreIcon from '@rsuite/icons/More';
import CloseIcon from '@rsuite/icons/Close';

const DrawerFooter = (props) => {
    const {
        expanded,
        onChange,
    } = props;

    return (
        <Navbar appearance="subtle" className="nav-toggle">
            <Nav pullRight>
                <Nav.Item onClick={onChange} style={{ width: 56, textAlign: 'center' }}>
                    {expanded ? <CloseIcon /> : <MoreIcon />}
                </Nav.Item>
            </Nav>
        </Navbar>
    );
};

DrawerFooter.defaultProps = {
    expanded: false,
};

DrawerFooter.propTypes = {
    expanded: bool,
    onChange: func.isRequired,
};

export default DrawerFooter;
