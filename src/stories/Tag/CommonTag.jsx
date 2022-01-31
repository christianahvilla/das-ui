import {
    string,
    bool,
    func,
} from 'prop-types';
import React from 'react';
import { TagGroup, Tag } from 'rsuite';

const CommonTag = (props) => {
    const {
        type,
        text,
        closable,
        size,
        color,
        onClose,
        target,
        href,
    } = props;

    return (
        <TagGroup>
            <Tag onClose={onClose} closable={closable} color={color} size={size}>
                {(type === 'link') ? (
                    <a target={target} href={href}>
                        {' '}
                        {text}
                    </a>
                ) : text }
            </Tag>
        </TagGroup>
    );
};

CommonTag.defaultProps = {
    type: '',
    text: '',
    closable: false,
    onClose: () => {},
    target: '_blank',
    href: 'https://rsuitejs.com/components/tag/',
};

CommonTag.propTypes = {
    text: string,
    closable: bool,
    onClose: func,
    type: string,
    target: string,
    href: string,
};

export default CommonTag;
