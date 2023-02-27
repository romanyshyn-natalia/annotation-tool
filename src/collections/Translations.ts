import {CollectionConfig} from 'payload/types';

const Translations: CollectionConfig = {
    slug: 'translations',
    admin: {
        useAsTitle: 'Gap',
        listSearchableFields: ['Gap'],
        defaultColumns: ['Gap', 'Translations']
    },
    fields: [
        {
            type: 'row',
            admin: {
                position: 'sidebar',
                readOnly: true,

            },
            fields: [
                {
                    name: 'PWN',
                    type: 'text',
                    admin: {
                        width: '50%',
                    },
                },
                {
                    name: 'Tree_File',
                    type: 'text',
                    admin: {
                        width: '50%',
                    },
                },
            ]
        },
        {
            name: 'Lemmas',
            type: 'textarea',
            admin: {
                position: 'sidebar',
                readOnly: true,
            },
        },
        {
            name: 'Hypernyms',
            type: 'textarea',
            admin: {
                position: 'sidebar',
                readOnly: true,
            },
        },
        {
            name: 'Hyponyms',
            type: 'textarea',
            admin: {
                position: 'sidebar',
                readOnly: true,
            },
        },
        {
            name: 'Gloss',
            type: 'textarea',
            admin: {
                position: 'sidebar',
                readOnly: true,
            },
        },
        {
            type: 'row',
            admin: {
                readOnly: true,
            },
            fields: [
                {
                    name: 'Gap',
                    type: 'text',
                    admin: {
                        width: '20%',
                    },
                },
                {
                    name: 'POS',
                    type: 'text',
                    admin: {
                        width: '10%',
                    },
                },
                {
                    name: 'Status',
                    type: 'select',
                    hasMany: false,
                    options: [
                        {label: 'candidate', value: 'candidate'},
                        {label: 'approved', value: 'approved'},
                    ],
                    admin: {
                        width: '30%',
                        readOnly: false,

                    },
                },
            ],
        },
        {
            name: 'Translated_Gloss',
            type: 'textarea',
        },
        {
            name: 'Translations',
            type: 'array',
            required: true,
            fields: [
                {
                    name: 'translation',
                    type: 'text',
                }

            ]
        },
    ],
}

export default Translations;