module.exports = {
    extend: '@apostrophecms/widget-type',
    options: {
        label: 'List',
        icon: 'listIcon',
        openGraph: false,
    },
    icons: {
        listIcon: 'FormatListBulletedSquare'
    },
    fields: {
        add: {
            listItems: {
                label: 'List items',
                type: 'array',
                titleField: 'listItem',
                fields: {
                    add: {
                        listItem: {
                            type: 'string',
                            label: 'Item',
                            required: true
                        },
                    }
                }
            },
            listType: {
                label: 'List type',
                type: 'select',
                def: 'unordered',
                choices: [
                    {
                        label: 'Unordered list (bulleted)',
                        value: 'unordered'
                    },
                    {
                        label: 'Ordered list (numbered)',
                        value: 'ordered'
                    },
                    {
                        label: 'Inline list',
                        value: 'inline'
                    }
                ]
            },
            unorderedListType: {
                label: 'Select the marker to use for list items',
                type: 'select',
                def: 'disc',
                if: {
                    listType: 'unordered'
                },
                choices: [
                    {
                        label: 'None',
                        value: 'none'
                    },
                    {
                        label: 'Disc (filled circle bullet)',
                        value: 'disc'
                    },
                    {
                        label: 'Circle (hollow circle)',
                        value: 'circle'
                    },
                    {
                        label: 'Square (filled square)',
                        value: 'square'
                    },
                    {
                        label: 'Custom symbol',
                        value: 'custom'
                    },
                ]
            },
            customListMarker: {
                label: 'Custom list marker',
                help: '',
                type: 'string',
                def: '-',
                if: {
                    unorderedListType: 'custom'
                }
            },
            orderedListType: {
                label: 'Select the numbering type for list items',
                type: 'select',
                def: '1',
                if: {
                    listType: 'ordered'
                },
                choices: [
                    {
                        label: 'Lowercase letters (a, b, c, ...)',
                        value: 'a'
                    },
                    {
                        label: 'Uppercase letters (A, B, C, ...)',
                        value: 'A'
                    },
                    {
                        label: 'Lowercase Roman numerals (i, ii, iii, ...)',
                        value: 'i'
                    },
                    {
                        label: 'Uppercase Roman numerals (I, II, III, ...)',
                        value: 'I'
                    },
                    {
                        label: 'Numbers (1, 2, 3, ...)',
                        value: '1'
                    }
                ]
            },
            orderedListStart: {
                label: 'Number to start list count from',
                help: 'Even when the list is not numbered, a number selects the starting point in the count',
                type: 'integer',
                def: 1,
                required: true,
                min: 1,
                step: 1,
                if: {
                    listType: 'ordered'
                }
            },
            reverseNumbering: {
                label: 'Number items in reverse order',
                help: 'Numbers items from high to low, such as in a countdown; the order of items in the list will not change',
                type: 'boolean',
                def: false,
                if: {
                    listType: 'ordered'
                }
            }
        }
    }
};
