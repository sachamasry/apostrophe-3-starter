module.exports = {
    extend: '@apostrophecms/widget-type',
    options: {
        label: 'Columns',
        icon: 'columnIcon',
        openGraph: false,
    },
    icons: {
        columnIcon: 'FormatColumns'
    },
    fields: {
        add: {
            columnCount: {
                type: 'select',
                label: 'How many columns?',
                help: 'Choose the number of columns you need for your layout',
                def: '1',
                choices: [
                    {
                        label: '1 column',
                        value: '1'
                    },
                    {
                        label: '2 columns',
                        value: '2'
                    },
                    {
                        label: '3 columns',
                        value: '3'
                    },
                    {
                        label: '4 columns',
                        value: '4'
                    },
                    {
                        label: '5 columns',
                        value: '5'
                    },
                    {
                        label: '6 columns',
                        value: '6'
                    },
                    {
                        label: '7 columns',
                        value: '7'
                    },
                    {
                        label: '8 columns',
                        value: '8'
                    }
                ]
            },
            sectionClass: {
                type: 'string',
                label: 'Column-containing section class',
                help: 'Columns are wrapped in section elements; specify class(es) for the section element'
            },
            sectionContainer: {
                type: 'boolean',
                label: 'Is this section a container?',
                help: 'Should this section element be a CSS container, containing the width of its content, padding and aligning it in the viewport?',
                def: 'true'
            },
            rowClass: {
                type: 'string',
                label: 'Row class',
                help: 'Specify a class element for the column-containing row'
            },
            verticalAlignment: {
                type: 'select',
                label: 'Vertical alignment',
                help: 'Choose how column contents should be vertically aligned within the parent row',
                def: 'top',
                choices: [
                    {
                        label: 'Align to top',
                        value: 'top'
                    },
                    {
                        label: 'Align to centre',
                        value: 'centre'
                    },
                    {
                        label: 'Align to bottom',
                        value: 'bottom'
                    }
                ],
                if: {
                    $or: [
                        { columnCount: '2' },
                        { columnCount: '3' },
                        { columnCount: '4' },
                        { columnCount: '6' },
                        { columnCount: '8' }
                    ]
                }
            },
            twoColumnSplit: {
                type: 'select',
                label: 'Select 2 column split',
                def: '50-50',
                choices: [
                    {
                        label: '16-84',
                        value: '16-84'
                    },
                    {
                        label: '25-75',
                        value: '25-75'
                    },
                    {
                        label: '33-67',
                        value: '33-67'
                    },
                    {
                        label: '50-50',
                        value: '50-50'
                    },
                    {
                        label: '67-33',
                        value: '67-33'
                    },
                    {
                        label: '76-25',
                        value: '76-25'
                    },
                    {
                        label: '84-16',
                        value: '84-16'
                    }
                ],
                if: {
                    columnCount: '2'
                }
            },
            threeColumnSplit: {
                type: 'select',
                label: 'Select 3 column split',
                def: '33-33-33',
                choices: [
                    {
                        label: '16-68-16',
                        value: '16-68-16'
                    },
                    {
                        label: '25-50-25',
                        value: '25-50-25'
                    },
                    {
                        label: '33-33-33',
                        value: '33-33-33'
                    }
                ],
                if: {
                    columnCount: '3'
                }
            },
            columnOne: {
                type: 'area',
                label: 'Column 1',
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
                        'horizontal-card': {},
                        'brand': {},
                        'newsletter-subscription': {},
                        'table': {},
                    }
                }
            },
            columnOneClass: {
                type: 'string',
                label: 'Column 1 class'
            },
            appendToColumnOneClass: {
                type: 'boolean',
                label: 'Append to default column class definitions?',
                def: 'true',
                toggle: {
                    true: 'Append to column class',
                    false: 'Override default classes'
                }
            },
            columnOneStyle: {
                type: 'string',
                label: 'Column 1 style'
            },
            columnTwo: {
                type: 'area',
                label: 'Column 2',
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
                        'columns': {},
                        'container-block': {},
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
                    }
                },
                if: {
                    $or: [
                        { columnCount: '2' },
                        { columnCount: '3' },
                        { columnCount: '4' },
                        { columnCount: '5' },
                        { columnCount: '6' },
                        { columnCount: '7' },
                        { columnCount: '8' }
                    ]
                }
            },
            columnTwoClass: {
                type: 'string',
                label: 'Column 2 class',
                if: {
                    $or: [
                        { columnCount: '2' },
                        { columnCount: '3' },
                        { columnCount: '4' },
                        { columnCount: '5' },
                        { columnCount: '6' },
                        { columnCount: '7' },
                        { columnCount: '8' }
                    ]
                }
            },
            appendToColumnTwoClass: {
                type: 'boolean',
                label: 'Append to default column class definitions?',
                def: 'true',
                toggle: {
                    true: 'Append to column class',
                    false: 'Override default classes'
                },
                if: {
                    $or: [
                        { columnCount: '2' },
                        { columnCount: '3' },
                        { columnCount: '4' },
                        { columnCount: '5' },
                        { columnCount: '6' },
                        { columnCount: '7' },
                        { columnCount: '8' }
                    ]
                }
            },
            columnTwoStyle: {
                type: 'string',
                label: 'Column 2 style',
                if: {
                    $or: [
                        { columnCount: '2' },
                        { columnCount: '3' },
                        { columnCount: '4' },
                        { columnCount: '5' },
                        { columnCount: '6' },
                        { columnCount: '7' },
                        { columnCount: '8' }
                    ]
                }
            },
            columnThree: {
                type: 'area',
                label: 'Column 3',
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
                        'columns': {},
                        'container-block': {},
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
                    }
                },
                if: {
                    $or: [
                        { columnCount: '3' },
                        { columnCount: '4' },
                        { columnCount: '5' },
                        { columnCount: '6' },
                        { columnCount: '7' },
                        { columnCount: '8' }
                    ]
                }
            },
            columnThreeClass: {
                type: 'string',
                label: 'Column 3 class',
                if: {
                    $or: [
                        { columnCount: '3' },
                        { columnCount: '4' },
                        { columnCount: '5' },
                        { columnCount: '6' },
                        { columnCount: '7' },
                        { columnCount: '8' }
                    ]
                }
            },
            appendToColumnThreeClass: {
                type: 'boolean',
                label: 'Append to default column class definitions?',
                def: 'true',
                toggle: {
                    true: 'Append to column class',
                    false: 'Override default classes'
                },
                if: {
                    $or: [
                        { columnCount: '3' },
                        { columnCount: '4' },
                        { columnCount: '5' },
                        { columnCount: '6' },
                        { columnCount: '7' },
                        { columnCount: '8' }
                    ]
                }
            },
            columnThreeStyle: {
                type: 'string',
                label: 'Column 3 style',
                if: {
                    $or: [
                        { columnCount: '3' },
                        { columnCount: '4' },
                        { columnCount: '5' },
                        { columnCount: '6' },
                        { columnCount: '7' },
                        { columnCount: '8' }
                    ]
                }
            },
            columnFour: {
                type: 'area',
                label: 'Column 4',
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
                        'columns': {},
                        'container-block': {},
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
                        'card': {},
                        'horizontal-card': {},
                        'brand': {},
                        'newsletter-subscription': {},
                        'table': {},
                    }
                },
                if: {
                    $or: [
                        { columnCount: '4' },
                        { columnCount: '5' },
                        { columnCount: '6' },
                        { columnCount: '7' },
                        { columnCount: '8' }
                    ]
                }
            },
            columnFourClass: {
                type: 'string',
                label: 'Column 4 class',
                if: {
                    $or: [
                        { columnCount: '4' },
                        { columnCount: '5' },
                        { columnCount: '6' },
                        { columnCount: '7' },
                        { columnCount: '8' }
                    ]
                }
            },
            appendToColumnFourClass: {
                type: 'boolean',
                label: 'Append to default column class definitions?',
                def: 'true',
                toggle: {
                    true: 'Append to column class',
                    false: 'Override default classes'
                },
                if: {
                    $or: [
                        { columnCount: '4' },
                        { columnCount: '5' },
                        { columnCount: '6' },
                        { columnCount: '7' },
                        { columnCount: '8' }
                    ]
                }
            },
            columnFourStyle: {
                type: 'string',
                label: 'Column 4 style',
                if: {
                    $or: [
                        { columnCount: '4' },
                        { columnCount: '5' },
                        { columnCount: '6' },
                        { columnCount: '7' },
                        { columnCount: '8' }
                    ]
                }
            },
            columnFive: {
                type: 'area',
                label: 'Column 5',
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
                        'columns': {},
                        'container-block': {},
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
                    }
                },
                if: {
                    $or: [
                        { columnCount: '5' },
                        { columnCount: '6' },
                        { columnCount: '7' },
                        { columnCount: '8' }
                    ]
                }
            },
            columnFiveClass: {
                type: 'string',
                label: 'Column 5 class',
                if: {
                    $or: [
                        { columnCount: '5' },
                        { columnCount: '6' },
                        { columnCount: '7' },
                        { columnCount: '8' }
                    ]
                }
            },
            appendToColumnFiveClass: {
                type: 'boolean',
                label: 'Append to default column class definitions?',
                def: 'true',
                toggle: {
                    true: 'Append to column class',
                    false: 'Override default classes'
                },
                if: {
                    $or: [
                        { columnCount: '5' },
                        { columnCount: '6' },
                        { columnCount: '7' },
                        { columnCount: '8' }
                    ]
                }
            },
            columnFiveStyle: {
                type: 'string',
                label: 'Column 5 style',
                if: {
                    $or: [
                        { columnCount: '5' },
                        { columnCount: '6' },
                        { columnCount: '7' },
                        { columnCount: '8' }
                    ]
                }
            },
            columnSix: {
                type: 'area',
                label: 'Column 6',
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
                        'columns': {},
                        'container-block': {},
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
                    }
                },
                if: {
                    $or: [
                        { columnCount: '6' },
                        { columnCount: '7' },
                        { columnCount: '8' }
                    ]
                }
            },
            columnSixClass: {
                type: 'string',
                label: 'Column 6 class',
                if: {
                    $or: [
                        { columnCount: '6' },
                        { columnCount: '7' },
                        { columnCount: '8' }
                    ]
                }
            },
            appendToColumnSixClass: {
                type: 'boolean',
                label: 'Append to default column class definitions?',
                def: 'true',
                toggle: {
                    true: 'Append to column class',
                    false: 'Override default classes'
                },
                if: {
                    $or: [
                        { columnCount: '6' },
                        { columnCount: '7' },
                        { columnCount: '8' }
                    ]
                }
            },
            columnSixStyle: {
                type: 'string',
                label: 'Column 6 style',
                if: {
                    $or: [
                        { columnCount: '6' },
                        { columnCount: '7' },
                        { columnCount: '8' }
                    ]
                }
            },
            columnSeven: {
                type: 'area',
                label: 'Column 7',
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
                        'columns': {},
                        'container-block': {},
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
                    }
                },
                if: {
                    $or: [
                        { columnCount: '7' },
                        { columnCount: '8' }
                    ]
                }
            },
            columnSevenClass: {
                type: 'string',
                label: 'Column 7 class',
                if: {
                    $or: [
                        { columnCount: '7' },
                        { columnCount: '8' }
                    ]
                }
            },
            appendToColumnSevenClass: {
                type: 'boolean',
                label: 'Append to default column class definitions?',
                def: 'true',
                toggle: {
                    true: 'Append to column class',
                    false: 'Override default classes'
                },
                if: {
                    $or: [
                        { columnCount: '7' },
                        { columnCount: '8' }
                    ]
                }
            },
            columnSevenStyle: {
                type: 'string',
                label: 'Column 7 style',
                if: {
                    $or: [
                        { columnCount: '7' },
                        { columnCount: '8' }
                    ]
                }
            },
            columnEight: {
                type: 'area',
                label: 'Column 8',
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
                        'columns': {},
                        'container-block': {},
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
                    }
                },
                if: {
                    columnCount: '8'
                }
            },
            columnEightClass: {
                type: 'string',
                label: 'Column 8 class',
                if: {
                    columnCount: '8'
                }
            },
            appendToColumnEightClass: {
                type: 'boolean',
                label: 'Append to default column class definitions?',
                def: 'true',
                toggle: {
                    true: 'Append to column class',
                    false: 'Override default classes'
                },
                if: {
                    columnCount: '8'
                }
            },
            columnEightStyle: {
                type: 'string',
                label: 'Column 8 style',
                if: {
                    columnCount: '8'
                }
            },
        }
    }
};
