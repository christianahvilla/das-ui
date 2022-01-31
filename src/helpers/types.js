import * as dateFns from 'date-fns';

export const PROGRESS_SPEEDS = [
    'fast',
    'normal',
    'slow',
];

export const COMPONENTS_SIZES = [
    'xs',
    'sm',
    'md',
    'lg',
];

export const BACKDROP_DIALOG = [
    'static',
    true,
    false,
];

export const ROLE_DIALOG = [
    'alertdialog',
    null,
];

export const ALERT_TYPES = [
    'info',
    'success',
    'warning',
    'error',
];

export const ALERT_HEADERS = [
    'Informational',
    'Success',
    'Warning',
    'Error',
];

export const CHIP_TYPES = [
    'error',
    'info',
    'primary',
    'secondary',
    'success',
    'warning',
];

export const COLOR_COMPONENTS = [
    'red',
    'orange',
    'yellow',
    'green',
    'cyan',
    'blue',
    'violet',
];

export const TYPE_COMPONENTS = [
    'default',
    'primary',
    'link',
    'subtle',
    'ghost',
];

export const TYPE_TAGS = [
    'text',
    'closable',
    'link',
];

export const FORMAT_DATES = [
    'yyyy-MM',
    'HH:mm',
    'HH:mm.ss',
    'yyyy-MM-dd HH:mm',
    'yyyy-MM-dd',
    'yyyy-MM',
    'dd-MM-yyyy',
    'dd MMM yyyy hh:mm:ss aa',
    'dd MMM yyyy hh:mm',
    'hh:mm:ss aa',
];

export const FORMAT_RANGES = [
    {
        label: 'Ahora',
        value: new Date(),
        closeOverlay: false,
    },
    {
        label: 'Hoy',
        value: new Date(),
        closeOverlay: true,
    },
    {
        label: 'Ayer',
        value: dateFns.addDays(new Date(), -1),
        closeOverlay: true,
    },
];
