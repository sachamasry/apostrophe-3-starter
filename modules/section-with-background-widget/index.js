module.exports = {
    extend: '@apostrophecms/widget-type',
    options: {
        label: 'Section With Background',
        openGraph: false,
    },
    fields: {
        add: {
            sectionClass: {
                type: 'string',
                label: 'Section class'
            },
            sectionId: {
                type: 'string',
                label: 'Section ID'
            },
            sectionContainer: {
                type: 'boolean',
                label: 'Is this section a container?',
                def: 'true'
            },
            sectionStyle: {
                type: 'string',
                label: 'Section style'
            },
            containerClass: {
                type: 'string',
                label: 'Background container class'
            },
            background: {
                type: 'area',
                label: 'Background',
                options: {
                    widgets: {
                        'image': {},
                        'figure': {},
                        '@apostrophecms/video': {},
                        '@apostrophecms/html': {},
                        'columns': {},
                        'container-block': {},
                        'spacer': {},
                        'horizontal-rule': {},
                    }
                }
            },
            sectionContents: {
                type: 'area',
                label: 'Section contents',
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
            },
            sectionContentsClass: {
                type: 'string',
                label: 'Section contents class'
            },
        }
    }
};
