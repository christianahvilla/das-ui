import moment from 'moment';

/* eslint-disable import/prefer-default-export */
export const TABLE_COLUMNS = [
    {
        key: 'name',
        label: 'Dessert (100g serving)',
        flexGrow: 1,
        sortable: true,
        sortType: 'string',
    },
    {
        key: 'calories',
        align: 'right',
        label: 'Calories',
        flexGrow: 1,
        sortable: true,
        sortType: 'string',
    },
    {
        key: 'fat',
        align: 'right',
        label: 'Fat (g)',
        flexGrow: 1,
        sortable: true,
        sortType: 'string',
    },
    {
        key: 'carbs',
        align: 'right',
        label: 'Carbs (g)',
        flexGrow: 1,
        sortable: true,
        sortType: 'string',
    },
    {
        key: 'protein',
        align: 'right',
        label: 'Protein (g)',
        flexGrow: 1,
        sortable: true,
        sortType: 'string',
    },
];

export const MOCK_DATA = [
    {
        id: 1,
        name: 'Cupcake',
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
    },
    {
        id: 2,
        name: 'Donut',
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
    },
    {
        id: 3,
        name: 'Eclair',
        calories: 262,
        fat: 16.0,
        carbs: 24,
        protein: 6.0,
    },
    {
        id: 4,
        name: 'Frozen yoghurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
    },
    {
        id: 5,
        name: 'Gingerbread',
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
    },
    {
        id: 6,
        name: 'Honeycomb',
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
    },
    {
        id: 7,
        name: 'Ice cream sandwich',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
    },
    {
        id: 8,
        name: 'Jelly Bean',
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
    },
    {
        id: 9,
        name: 'KitKat',
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7.0,
    },
    {
        id: 10,
        name: 'Lollipop',
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0.0,
    },
    {
        id: 11,
        name: 'Marshmallow',
        calories: 318,
        fat: 0,
        carbs: 81,
        protein: 2.0,
    },
    {
        id: 12,
        name: 'Nougat',
        calories: 360,
        fat: 19.0,
        carbs: 9,
        protein: 37.0,
    },
    {
        id: 13,
        name: 'Oreo',
        calories: 437,
        fat: 18.0,
        carbs: 63,
        protein: 4.0,
    },
];

export const INPUT_CONTENT = [
    { content: 'Hola' },
    { content: 'me llamo' },
    { content: 'Christian' },
    { content: 'Herrejon' },
    { content: 'Villa' },
    { content: 'alias el chorizoman' },
];

export const EVENT = [
    {
        title: 'Festival in HH',
        start: moment().add(1, 'days').format(),
        end: moment().add(4, 'days').add(3, 'hours').format(),
        className: 'festival',
        color: 'orange',
        textColor: 'black',
        kind: 'festival',
        state: 'hh',
    },
    {
        title: 'Party in HH',
        start: moment().subtract(2, 'days').format(),
        end: moment().subtract(2, 'days').add(3, 'hours').format(),
        color: 'brightblue',
        textColor: 'white',
        kind: 'party',
        state: 'hh',
    },
    {
        title: 'Party in SH',
        start: moment().format(),
        end: moment().add(3, 'hours').format(),
        color: 'brightblue',
        textColor: 'white',
        kind: 'party',
        state: 'sh',
    },
    {
        title: 'Concert in SH',
        start: moment().add(1, 'days').format(),
        end: moment().add(1, 'days').add(3, 'hours').format(),
        color: 'red',
        textColor: 'white',
        kind: 'concert',
        state: 'sh',
    },
    {
        title: 'Concert in HH',
        start: moment().subtract(3, 'days').format(),
        end: moment().subtract(3, 'days').add(3, 'hours').format(),
        color: 'red',
        textColor: 'white',
        kind: 'concert',
        state: 'hh',
    },
    {
        title: '#1 Background title',
        start: moment().subtract(6, 'days').format('YYYY-MM-DD'),
        end: moment().subtract(2, 'days').format('YYYY-MM-DD'),
        display: 'background',
        kind: 'holiday',
    },
    {
        title: '#2 title',
        start: moment().subtract(8, 'days').format('YYYY-MM-DD'),
        end: moment().subtract(8, 'days').format('YYYY-MM-DD'),
        display: 'background',
        color: '#ff9f89',
        kind: 'holiday',
    },
    {
        // FIX: Two Background events overlap each other
        title: '#3 Overlap',
        start: moment().subtract(8, 'days').format('YYYY-MM-DD'),
        end: moment().subtract(8, 'days').format('YYYY-MM-DD'),
        display: 'background',
        kind: 'holiday',
    },
];

export const Buttons = [
    {
        key: 1,
        appearance: 'primary',
        color: 'blue',
        text: 'Prev',
        // eslint-disable-next-line no-console
        onClick: () => { console.log('prev'); },
        disabled: false,
        loading: false,
    },
    {
        key: 2,
        appearance: 'primary',
        color: 'blue',
        text: 'Now',
        // eslint-disable-next-line no-console
        onClick: () => { console.log('now'); },
        disabled: false,
        loading: false,
    },
    {
        key: 3,
        appearance: 'primary',
        color: 'blue',
        text: 'Next',
        // eslint-disable-next-line no-console
        onClick: () => { console.log('next'); },
        disabled: false,
        loading: false,
    },
];

export const FAKE_DATA_SELECT = [
    {
        label: 'Eugenia',
        value: 'Eugenia',
        role: 'Master',
    },
    {
        label: 'Kariane',
        value: 'Kariane',
        role: 'Master',
    },
    {
        label: 'Louisa',
        value: 'Louisa',
        role: 'Master',
    },
    {
        label: 'Marty',
        value: 'Marty',
        role: 'Master',
    },
    {
        label: 'Kenya',
        value: 'Kenya',
        role: 'Master',
    },
    {
        label: 'Hal',
        value: 'Hal',
        role: 'Developer',
    },
    {
        label: 'Julius',
        value: 'Julius',
        role: 'Developer',
    },
    {
        label: 'Travon',
        value: 'Travon',
        role: 'Developer',
    },
    {
        label: 'Vincenza',
        value: 'Vincenza',
        role: 'Developer',
    },
    {
        label: 'Dominic',
        value: 'Dominic',
        role: 'Developer',
    },
    {
        label: 'Pearlie',
        value: 'Pearlie',
        role: 'Guest',
    },
    {
        label: 'Tyrel',
        value: 'Tyrel',
        role: 'Guest',
    },
    {
        label: 'Jaylen',
        value: 'Jaylen',
        role: 'Guest',
    },
    {
        label: 'Rogelio',
        value: 'Rogelio',
        role: 'Guest',
    },
];
