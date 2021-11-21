import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { toaster } from 'rsuite';
import { NOTIFICATIONS, PLACE_NOTIFICATION, TYPE_NOTIFICATION } from '../../helpers/constants';
import CommonSelect from '../SelectPicker/CommonSelectPicker';
import CommonAlert from '../Alert/CommonAlert';
import { COMPONENTS_SIZES, TYPE_COMPONENTS } from '../../helpers/types';
import CommonButton from '../Button/CommonButton';
import CommonButtonToolBar from '../ButtonToolbar/CommonButtonToolBar';

const Wrapper = () => {
    const [notiType, setNotiType] = useState('info');
    const [placement, setPlacement] = useState('topStart');

    const Notification = ({ props }) => {
        const {
            closable,
            showIcon,
            type,
            header,
            msg,
        } = props;

        return (<CommonAlert closable={closable} showIcon={showIcon} type={type} header={header} msg={msg} />
        );
    };

    const SelectType = () => (
        <CommonSelect
            appearance={TYPE_COMPONENTS[0]}
            block={false}
            data={TYPE_NOTIFICATION}
            disabled={false}
            searchable={false}
            onChange={setNotiType}
            plaintext={false}
            readOnly={false}
            size={COMPONENTS_SIZES[0]}
            selectWidth={224}
            value={notiType}
        />
    );

    const SelectPlacement = () => (
        <CommonSelect
            appearance={TYPE_COMPONENTS[0]}
            block={false}
            data={PLACE_NOTIFICATION}
            disabled={false}
            searchable={false}
            onChange={setPlacement}
            plaintext={false}
            readOnly={false}
            size={COMPONENTS_SIZES[0]}
            selectWidth={224}
            value={placement}
        />
    );

    const AddButton = () => <CommonButton onClick={() => toaster.push(<Notification props={NOTIFICATIONS[notiType]} />, { placement })} text="Add" />;
    const DeleteButton = () => <CommonButton onClick={() => toaster.remove()} text="Remove" />;
    const ClearButton = () => <CommonButton onClick={() => toaster.clear()} text="Clear" />;

    const Body = () => (
        <>
            <SelectPlacement />
            <SelectType />
            <AddButton />
            <DeleteButton />
            <ClearButton />
        </>
    );

    return (
        <div>
            <Notification props={NOTIFICATIONS[notiType]} />
            <hr />
            <CommonButtonToolBar size={COMPONENTS_SIZES[1]} Body={Body} />
        </div>
    );
};

storiesOf('Toaster', module).add('Toaster', () => (
    <Wrapper />
));
