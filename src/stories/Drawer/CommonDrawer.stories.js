import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from 'rsuite';
import { text } from '@storybook/addon-knobs';
import CommonDrawer from './CommonDrawer';

const Wrapper = () => {
    const [activeKey, setActiveKey] = useState('1');
    const [expanded, setExpanded] = useState(false);

    return (
        <>
            <Button onClick={() => setExpanded(!expanded)}>Open</Button>
            <div style={{ width: 240 }}>
                <CommonDrawer
                    expanded={expanded}
                    activeKey={activeKey}
                    setActiveKey={setActiveKey}
                    defaultOpenKeys={['1', '2', '3']}
                    name={text('Name', 'Nayeli Solorzano')}
                    type={text('User Type', 'Admin')}
                    imageSrc={text('Image', '../../assets/avatar.png')}
                />
            </div>
        </>
    );
};

storiesOf('Drawer', module).add('Drawer', () => (
    <Wrapper />
));
