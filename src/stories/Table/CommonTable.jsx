import React from 'react';
import { DataGrid, GridActionsCellItem, esES } from '@mui/x-data-grid';
import {
    arrayOf, bool, func, number, shape,
} from 'prop-types';
import CommonIcon from '../Icon/CommonIcon';

const CommonTable = (props) => {
    const {
        columns,
        handleDelete,
        handleEdit,
        tableHeight,
        onPageSizeChange,
        pagination,
        pageSize,
        rows,
        rowsPerPageOptions,
    } = props;

    const actions = {
        field: 'actions',
        type: 'actions',
        headerName: 'Opciones',
        width: 160,
        getActions: (params) => {
            const { id } = params;
            return [
                <GridActionsCellItem
                    icon={<CommonIcon kind="edit" />}
                    label="Editar"
                    onClick={handleEdit(id)}
                    showInMenu
                />,
                <GridActionsCellItem
                    icon={<CommonIcon kind="delete" />}
                    label="Eliminar"
                    onClick={handleDelete(id)}
                    showInMenu
                />,
            ];
        },
    };

    const columnActions = [...columns, actions];

    return (
        <div style={{ height: tableHeight, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columnActions}
                localeText={esES.props.MuiDataGrid.localeText}
                rowsPerPageOptions={rowsPerPageOptions}
                onPageSizeChange={onPageSizeChange}
                pageSize={pageSize}
                pagination={pagination}
            />
        </div>
    );
};

CommonTable.defaultProps = {
    handleDelete: () => {},
    handleEdit: () => {},
    onPageSizeChange: () => {},
    pagination: null,
    rows: [],
    rowsPerPageOptions: [5, 10, 20],
};

CommonTable.propTypes = {
    columns: arrayOf(shape({})).isRequired,
    handleDelete: func,
    handleEdit: func,
    tableHeight: number.isRequired,
    onPageSizeChange: func,
    pagination: bool,
    pageSize: number.isRequired,
    rows: arrayOf(shape({})),
    rowsPerPageOptions: arrayOf(number),
};

export default CommonTable;
