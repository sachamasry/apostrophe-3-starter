module.exports = {
    extend: '@apostrophecms/widget-type',
    options: {
        label: 'Quote',
        icon: 'quoteIcon',
        openGraph: false,
    },
    icons: {
        quoteIcon: 'FormatQuoteOpen'
    },
    fields: {
        add: {
            quotationType: {
                type: 'select',
                label: 'Choose quotation type',
                choices: [
                    {
                        label: 'Block quotation (usually refers to an external citation)',
                        value: 'blockquote'
                    },
                    {
                        label: 'Pull quote (usually a short excerpt from the surrounding text)',
                        value: 'pullquote'
                    }
                ]
            },
            quotation: {
                type: 'area',
                label: 'Quotation',
                options: {
                    widgets: {
                        '@apostrophecms/rich-text': {},
                        'image': {},
                        'figure': {},
                        '@apostrophecms/video': {},
                        '@apostrophecms/html': {},
                        'container-block': {},
                        'spacer': {},
                        'horizontal-rule': {},
                        'link': {},
                    }
                }
            },
            citation: {
                type: 'area',
                label: 'Citation',
                options: {
                    widgets: {
                        '@apostrophecms/rich-text': {},
                    }
                },
                if: {
                    quotationType: 'blockquote'
                }
            },
            citationUrl: {
                type: 'string',
                label: 'Citation URL',
                help: 'The URL source of the quotation, if online source is known',
                if: {
                    quotationType: 'blockquote'
                }
            },
            alignBlock: {
                type: 'select',
                label: 'Change quote block alignment',
                def: 'none',
                choices: [
                    {
                        label: 'None',
                        value: 'none'
                    },
                    {
                        label: 'Align left',
                        value: 'left'
                    },
                    {
                        label: 'Align centre',
                        value: 'centre'
                    },
                    {
                        label: 'Align right',
                        value: 'right'
                    }
                ]
            },
            alignText: {
                type: 'select',
                label: 'Change blockquote text alignment',
                def: 'none',
                choices: [
                    {
                        label: 'None',
                        value: 'none'
                    },
                    {
                        label: 'Align left',
                        value: 'left'
                    },
                    {
                        label: 'Align centre',
                        value: 'centre'
                    },
                    {
                        label: 'Align right',
                        value: 'right'
                    }
                ]
            },
        }
    }
};
