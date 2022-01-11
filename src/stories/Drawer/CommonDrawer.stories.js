import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import CommonDrawer from './CommonDrawer';
import CommonButton from '../Button/CommonButton';
import avatarFile from '../../assets/avatar.png';

const Wrapper = () => {
    const [activeKey, setActiveKey] = useState('home');
    const [expanded, setExpanded] = useState(false);
    const onChange = () => setExpanded(!expanded);

    return (
        <>
            <CommonButton onClick={onChange} text="Open" />
            <div style={{ width: 240 }}>
                <CommonDrawer
                    expanded={expanded}
                    activeKey={activeKey}
                    setActiveKey={setActiveKey}
                    defaultOpenKeys={['1', '2', '3']}
                    name={text('Name', 'Nayeli Solorzano')}
                    type={text('User Type', 'Admin')}
                    imageSrc={text('Image', avatarFile)}
                    onChange={onChange}
                />
            </div>
        </>
    );
};

storiesOf('Drawer', module).add('Drawer', () => (
    <Wrapper />
));
