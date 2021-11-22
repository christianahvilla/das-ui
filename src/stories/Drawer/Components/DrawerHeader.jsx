import { bool, string } from 'prop-types';
import React from 'react';
import {
    Avatar, Content, FlexboxGrid,
} from 'rsuite';

const DrawerHeader = (props) => {
    const {
        expanded,
        imageSrc,
        name,
        type,
    } = props;

    return (
        <FlexboxGrid
            align="middle"
            style={{
                width: '80%', backgroundColor: expanded ? '#F2F3F5' : 'white', margin: '40px 20px', padding: 10, marginLeft: expanded ? 20 : 0,
            }}
        >
            <FlexboxGrid.Item colspan={4} style={{ width: '20%' }}>
                <Avatar circle src={imageSrc} size={expanded ? 'md' : 'sm'} />
            </FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={8} style={{ paddingLeft: 20, width: '80%' }}>
                {expanded && (
                    <Content>
                        <Content style={{ fontWeight: 'bold' }}>
                            {name}
                        </Content>
                        <Content style={{ fontSize: 12 }}>
                            {type}
                        </Content>
                    </Content>
                )}
            </FlexboxGrid.Item>
        </FlexboxGrid>
    );
};

DrawerHeader.propTypes = {
    expanded: bool.isRequired,
    imageSrc: string.isRequired,
    name: string.isRequired,
    type: string.isRequired,
};

export default DrawerHeader;
