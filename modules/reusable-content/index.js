module.exports = {
    extend: '@apostrophecms/piece-type',
    options: {
        label: 'Reusable Content',
        pluralLabel: 'Reusable contents',
        alias: 'reusable-content',
        quickCreate: false,
        sort: {
            slug: 1,
        },
        export: true,
        import: true,
        openGraph: false,
        seoFields: false,
    },
    fields: {
        add: {
            title: {
                type: 'string',
                label: 'Reusable content title'
            },
            description: {
                type: 'string',
                label: 'Describe this content\'s purpose',
                textarea: true
            },
            body: {
                type: 'area',
                label: 'Reusable content body',
                options: {
                    widgets: {
                        '@apostrophecms/rich-text': {},
                        'image': {
                            size: 'one-sixth',
                            dimensionAttrs: true
                        },
                        'figure': {},
                        '@apostrophecms/video': {},
                        '@apostrophecms/html': {},
                        'container-block': {},
                        'columns': {},
                        'carousel': {},
                        'cover-block': {},
                        'spacer': {},
                        'horizontal-rule': {},
                        'verse': {},
                        'quote': {},
                        'lead-paragraph': {},
                        'list': {},
                        'list-group': {},
                        'definition-list': {},
                        'link': {},
                        'button': {},
                        'card': {},
                        'brand': {},
                        'newsletter-subscription': {},
                        'table': {},
                    }
                }
            }
        },
        group: {
            basics: {
                label: 'Basics',
                fields: [ 'title', 'description', 'body' ]
            }
        }
    }
};
