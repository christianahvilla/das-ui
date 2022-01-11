/* eslint-disable no-console */
import React from 'react';
import {
    Sidenav, Nav, Dropdown, Sidebar,
} from 'rsuite';
import CalendarIcon from '@rsuite/icons/Calendar';
import PeoplesIcon from '@rsuite/icons/Peoples';
import DocPassIcon from '@rsuite/icons/DocPass';
import SpeakerIcon from '@rsuite/icons/Speaker';
import TrendIcon from '@rsuite/icons/Trend';
import ChangeListIcon from '@rsuite/icons/ChangeList';
import OperatePeopleIcon from '@rsuite/icons/OperatePeople';
import StorageIcon from '@rsuite/icons/Storage';
import DashboardIcon from '@rsuite/icons/Dashboard';
import {
    arrayOf, bool, func, string,
} from 'prop-types';
import DrawerHeader from './Components/DrawerHeader';
import DrawerFooter from './Components/DrawerFooter';

const panelStyles = {
    padding: '15px 20px',
    color: '#aaa',
};

const activeStyle = {
    backgroundColor: '#4F95FF26',
    borderRight: '10px solid #2179FC50',
};

const navItemStyle = {
    textDecoration: 'none',
};

const drawerStyle = {
    borderStyle: 'solid',
    borderWidth: 'thin',
    borderColor: '#e4e4e4',
};

const CommonDrawer = (props) => {
    const {
        activeKey,
        defaultOpenKeys,
        expanded,
        name,
        setActiveKey,
        type,
        imageSrc,
        onChange,
    } = props;

    return (
        <Sidebar
            collapsible
            width={expanded ? 260 : 56}
            style={drawerStyle}
        >
            <Sidenav
                expanded={expanded}
                defaultOpenKeys={defaultOpenKeys}
                appearance="subtle"
            >
                <Sidenav.Body>
                    <DrawerHeader imageSrc={imageSrc} name={name} type={type} expanded={expanded} />
                    <Nav
                        activeKey={activeKey}
                        onSelect={setActiveKey}
                    >
                        {expanded && (
                            <Dropdown.Item panel style={panelStyles}>
                                General
                            </Dropdown.Item>
                        ) }
                        <Nav.Item eventKey="home" style={{ ...navItemStyle, ...(activeKey === 'home' ? activeStyle : null) }} icon={<DashboardIcon />}>
                            Inicio
                        </Nav.Item>
                        <Nav.Item eventKey="agenda" style={{ ...navItemStyle, ...(activeKey === 'agenda' ? activeStyle : null) }} icon={<CalendarIcon />}>
                            Agenda
                        </Nav.Item>
                        {expanded && (
                            <Dropdown.Item panel style={panelStyles}>
                                Consultorio
                            </Dropdown.Item>
                        ) }
                        <Nav.Item eventKey="patiens" style={{ ...navItemStyle, ...(activeKey === 'patiens' ? activeStyle : null) }} icon={<PeoplesIcon />}>
                            Pacientes
                        </Nav.Item>
                        <Nav.Item eventKey="treatments" style={{ ...navItemStyle, ...(activeKey === 'treatments' ? activeStyle : null) }} icon={<DocPassIcon />}>
                            Tratamientos
                        </Nav.Item>
                        <Nav.Item eventKey="recomendations" style={{ ...navItemStyle, ...(activeKey === 'recomendations' ? activeStyle : null) }} icon={<SpeakerIcon />}>
                            Recomendaciones
                        </Nav.Item>
                        {expanded && (
                            <Dropdown.Item panel style={panelStyles}>
                                Administración
                            </Dropdown.Item>
                        ) }
                        <Nav.Item eventKey="inventory" style={{ ...navItemStyle, ...(activeKey === 'inventory' ? activeStyle : null) }} icon={<StorageIcon />}>
                            Invnetario
                        </Nav.Item>
                        <Nav.Item eventKey="trends" style={{ ...navItemStyle, ...(activeKey === 'trends' ? activeStyle : null) }} icon={<TrendIcon />}>
                            Ingresos/Egresos
                        </Nav.Item>
                        <Nav.Item eventKey="providers" style={{ ...navItemStyle, ...(activeKey === 'providers' ? activeStyle : null) }} icon={<OperatePeopleIcon />}>
                            Proveedores
                        </Nav.Item>
                        <Nav.Item eventKey="bills" style={{ ...navItemStyle, ...(activeKey === 'bills' ? activeStyle : null) }} icon={<ChangeListIcon />}>
                            Recibos
                        </Nav.Item>
                    </Nav>
                </Sidenav.Body>
            </Sidenav>
            <DrawerFooter expanded={expanded} onChange={onChange} />
        </Sidebar>
    );
};

CommonDrawer.defaultProps = {
    activeKey: '',
    defaultOpenKeys: [],
    expanded: false,
    name: '',
    setActiveKey: () => {},
    type: '',
    imageSrc: '',
};

CommonDrawer.propTypes = {
    activeKey: string,
    defaultOpenKeys: arrayOf(string),
    expanded: bool,
    name: string,
    setActiveKey: func,
    type: string,
    imageSrc: string,
    onChange: func.isRequired,
};

export default CommonDrawer;
