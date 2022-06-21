module.exports = {
    extend: '@apostrophecms/widget-type',
    options: {
        label: 'Definition list',
        icon: 'definitionListIcon',
        openGraph: false,
    },
    icons: {
        definitionListIcon: 'BookAlphabet'
    },
    fields: {
        add: {
            termsAndDefinitions: {
                label: 'Terms and Definitions',
                type: 'array',
                titleField: 'term',
                fields: {
                    add: {
                        term: {
                            type: 'string',
                            label: 'Term',
                            required: true
                        },
                        definition: {
                            type: 'string',
                            label: 'Definition',
                            required: true
                        }
                    }
                }
            }
        }
    }
};
