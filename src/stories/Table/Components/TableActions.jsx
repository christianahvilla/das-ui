import React from 'react';
import { Cell } from 'rsuite-table';
import { IconButton } from 'rsuite';
import TrashIcon from '@rsuite/icons/Trash';
import EditIcon from '@rsuite/icons/Edit';
import {
    func, shape, string,
} from 'prop-types';

const TableActions = (props) => {
    const {
        dataKey,
        handleedit,
        handledelete,
        rowData,
    } = props;

    const newProps = { ...props };
    delete newProps[handleedit];
    delete newProps[handledelete];

    const onDelete = () => handledelete(rowData[dataKey]);

    const onEdit = () => handleedit(rowData[dataKey]);

    return (
        <Cell {...newProps} style={{ paddingTop: 5, paddingBottom: 5 }}>
            <IconButton appearance="subtle" onClick={onEdit} icon={<EditIcon />} />
            <IconButton appearance="subtle" onClick={onDelete} icon={<TrashIcon />} />
        </Cell>
    );
};

TableActions.propTypes = {
    rowData: {},
};

TableActions.propTypes = {
    dataKey: string.isRequired,
    handleedit: func,
    handledelete: func,
    // eslint-disable-next-line react/require-default-props
    rowData: shape({}),
};

TableActions.defaultProps = {
    handleedit: () => {},
    handledelete: () => {},
};

export default TableActions;
