import { string } from 'prop-types';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import ICONS from '../../helpers/icons';

const CommonIcon = (props) => {
    const {
        kind,
    } = props;

    const selectIcon = () => {
        switch (kind) {
        case ICONS.DELETE:
            return (<DeleteIcon />);

        case ICONS.SEARCH:
            return (<SearchIcon />);

        case ICONS.EDIT:
            return (<EditIcon />);

        case ICONS.PLUS:
            return (<AddIcon />);

        default: return '';
        }
    };

    return (
        <>{selectIcon()}</>
    );
};

CommonIcon.defaultProps = {
    kind: '',
};

CommonIcon.propTypes = {
    kind: string,
};

export default CommonIcon;
