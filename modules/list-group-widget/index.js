module.exports = {
    extend: '@apostrophecms/widget-type',
    options: {
        label: 'List group',
        icon: 'listGroupIcon',
        openGraph: false,
    },
    icons: {
        listGroupIcon: 'FormatListText'
    },
    fields: {
        add: {
            alignList: {
                type: 'select',
                label: 'Change list alignment',
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
                    },
                    {
                        label: 'Align flush',
                        value: 'flush'
                    }
                ]
            },
            listType: {
                type: 'select',
                label: 'Type of list',
                def: 'ul',
                required: true,
                choices: [
                    {
                        label: 'Itemised',
                        value: 'ul'
                    },
                    {
                        label: 'Numbered',
                        value: 'ol'
                    }
                ]
            },
            listItems: {
                label: 'List items',
                type: 'array',
                titleField: 'listItem',
                fields: {
                    add: {
                        listItem: {
                            type: 'area',
                            label: 'Item',
                            required: true,
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
                                    'spacer': {},
                                    'horizontal-rule': {},
                                    'list': {},
                                    'list-group': {},
                                    'definition-list': {},
                                    'link': {},
                                    'button': {},
                                    'card': {},
                                    'brand': {},
                                }
                            }
                        },
                    }
                }
            }
        }
    }
};
