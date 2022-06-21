module.exports = {
    options: {
        label: 'Home Page'
    },
    fields: {
        add: {
            main: {
                type: 'area',
                options: {
                    widgets: {
                        '@apostrophecms/rich-text': {},
                        'image': {},
                        'figure': {},
                        '@apostrophecms/video': {},
                        '@apostrophecms/html': {},
                        'section-with-background': {},
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
                        'horizontal-card': {},
                        'brand': {},
                        'newsletter-subscription': {},
                        'table': {},
                        'aside': {},
                    }
                }
            }
        },
        group: {
            basics: {
                label: 'Basics',
                fields: [
                    'title',
                    'main'
                ]
            }
        }
    }
};
