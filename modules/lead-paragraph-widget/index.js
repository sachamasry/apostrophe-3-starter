module.exports = {
    extend: '@apostrophecms/widget-type',
    options: {
        label: 'Lead Paragraph',
        icon: 'leadParagraphIcon',
        openGraph: false,
    },
    icons: {
        leadParagraphIcon: 'FormatParagraph'
    },
    fields: {
        add: {
            leadParagraph: {
                type: 'area',
                label: 'Lead paragraph',
                options: {
                    widgets: {
                        '@apostrophecms/rich-text': {},
                    },
                    max: 1
                }
            }
        }
    }
};
