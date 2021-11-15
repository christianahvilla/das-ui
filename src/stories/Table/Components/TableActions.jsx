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
        handleEdit,
        handleDelete,
        rowData,
    } = props;

    const newProps = { ...props };
    delete newProps[handleEdit];
    delete newProps[handleDelete];

    const onDelete = () => handleDelete(rowData[dataKey]);

    const onEdit = () => handleEdit(rowData[dataKey]);

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
    handleEdit: func,
    handleDelete: func,
    // eslint-disable-next-line react/require-default-props
    rowData: shape({}),
};

TableActions.defaultProps = {
    handleEdit: () => {},
    handleDelete: () => {},
};

export default TableActions;
