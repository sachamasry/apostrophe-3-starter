module.exports = {
    extend: '@apostrophecms/widget-type',
    options: {
        label: 'Container Block',
        icon: 'containerIcon',
        openGraph: false,
    },
    icons: {
        containerIcon: 'Contain'
    },
    fields: {
        add: {
            containerContents: {
                type: 'area',
                label: 'Contained contents',
                options: {
                    widgets: {
                        '@apostrophecms/rich-text': {},
                        'image': {},
                        'figure': {},
                        '@apostrophecms/video': {},
                        '@apostrophecms/html': {},
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
                        'aside': {},
                    }
                }
            },
            containerPurpose: {
                type: 'select',
                label: 'Choose this container\'s purpose',
                choices: [
                    {
                        label: 'Regular container',
                        value: 'container'
                    },
                    {
                        label: 'Flexible container: manage layout and alignment of children',
                        value: 'flexbox'
                    },
                    {
                        label: 'Card-grouping container',
                        value: 'card-group-container'
                    },
                    {
                        label: 'Card grid container',
                        value: 'card-grid-container',
                    }
                ]
            },
            containerJustifyContent: {
                type: 'select',
                label: 'Change x-axis alignment of children items',
                choices: [
                    {
                        label: 'Justify to left of container',
                        value: 'start'
                    },
                    {
                        label: 'Justify to right of container',
                        value: 'end'
                    },
                    {
                        label: 'Justify to centre of container',
                        value: 'centre'
                    },
                    {
                        label: 'Justify to container edges with equal spaces between item',
                        value: 'between'
                    },
                    {
                        label: 'Justify to fill container with equal spaces around items',
                        value: 'around'
                    },
                    {
                        label: 'Justify to fill container with equal space between items and edges',
                        value: 'evenly'
                    },
                ],
                if: {
                    containerPurpose: 'flexbox'
                }
            },
            columnsPerRowExtraSmall: {
                type: 'integer',
                label: 'Number of columns (extra small display)',
                help: 'How many columns should be displayed on extra small screens?',
                min: 1,
                max: 6,
                def: 1,
                if: {
                    containerPurpose: 'card-grid-container',
                }
            },
            columnsPerRowSmall: {
                type: 'integer',
                label: 'Number of columns (small display)',
                help: 'How many columns should be displayed on small screens?',
                min: 1,
                max: 6,
                def: 1,
                if: {
                    containerPurpose: 'card-grid-container',
                }
            },
            columnsPerRowMedium: {
                type: 'integer',
                label: 'Number of columns (medium display)',
                help: 'How many columns should be displayed on medium screens?',
                min: 1,
                max: 6,
                def: 1,
                if: {
                    containerPurpose: 'card-grid-container',
                }
            },
            columnsPerRowLarge: {
                type: 'integer',
                label: 'Number of columns (large display)',
                help: 'How many columns should be displayed on large screens?',
                min: 1,
                max: 6,
                if: {
                    containerPurpose: 'card-grid-container',
                }
            },
            columnsPerRowExtraLarge: {
                type: 'integer',
                label: 'Number of columns (extra large display)',
                help: 'How many columns should be displayed on extra large screens?',
                min: 1,
                max: 6,
                if: {
                    containerPurpose: 'card-grid-container',
                }
            },
            columnsPerRowExtraExtraLarge: {
                type: 'integer',
                label: 'Number of columns (extra, extra large display)',
                help: 'How many columns should be displayed on extra, extra large screens?',
                min: 1,
                max: 6,
                if: {
                    containerPurpose: 'card-grid-container',
                }
            },
            containerContentGapping: {
                type: 'select',
                label: 'Change gapping between children items',
                def: '0',
                choices: [
                    {
                        label: '0',
                        value: '0'
                    },
                    {
                        label: '1',
                        value: '1'
                    },
                    {
                        label: '2',
                        value: '2'
                    },
                    {
                        label: '3',
                        value: '3'
                    },
                    {
                        label: '4',
                        value: '4'
                    },
                    {
                        label: '5',
                        value: '5'
                    },
                    {
                        label: '6',
                        value: '6'
                    },
                ],
                if: {
                    $or: [
                        { containerPurpose: 'flexbox' },
                        { containerPurpose: 'card-grid-container' },
                    ]
                }
            },
            containerClass: {
                type: 'string',
                label: 'Container block class'
            },
            containerId: {
                type: 'string',
                label: 'Container block ID'
            },
            containerStyle: {
                type: 'string',
                label: 'Container style',
                textarea: true
            },
        }
    }
};
