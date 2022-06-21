module.exports = {
    extend: '@apostrophecms/widget-type',
    options: {
        label: 'Figure',
        className: false,
        icon: 'image-icon',
        dimensionAttrs: false,
        openGraph: false,
    },
    fields: {
        add: {
            enclosedContent: {
                type: 'area',
                label: 'Figure content',
                help: 'Figures are commonly used to enclose images, illustrations, diagrams, graphics, charts, reference tables, videos, poems, code snippets, etc., and may have a legend or caption',
                options: {
                    widgets: {
                        'image': {
                            size: 'one-sixth',
                            dimensionAttrs: true
                        },
                        '@apostrophecms/video': {},
                        '@apostrophecms/html': {},
                        'columns': {},
                        'container-block': {},
                        'horizontal-rule': {},
                        'verse': {},
                        'card': {},
                        'horizontal-card': {},
                        'brand': {},
                    }
                }
            },
            displayCaption: {
                type: 'boolean',
                label: 'Display a caption next to the figure?',
            },
            figureCaption: {
                type: 'area',
                label: 'Caption for figure',
                options: {
                    widgets: {
                        '@apostrophecms/rich-text': {},
                    }
                },
                if: {
                    displayCaption: true
                }
            },
            alignFigure: {
                type: 'select',
                label: 'Change alignment',
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
            figureWidth: {
                type: 'select',
                label: 'Change width',
                def: '100',
                choices: [
                    {
                        label: '20%',
                        value: '20'
                    },
                    {
                        label: '25%',
                        value: '25'
                    },
                    {
                        label: '33%',
                        value: '33'
                    },
                    {
                        label: '40%',
                        value: '40'
                    },
                    {
                        label: '50%',
                        value: '50'
                    },
                    {
                        label: '60%',
                        value: '60'
                    },
                    {
                        label: '66%',
                        value: '66'
                    },
                    {
                        label: '75%',
                        value: '75'
                    },
                    {
                        label: '80%',
                        value: '80'
                    },
                    {
                        label: '100%',
                        value: '100'
                    }
                ]
            },
            figureClass: {
                type: 'string',
                label: 'Figure class'
            },
            appendToFigureClass: {
                type: 'boolean',
                label: 'Append to default figure class definitions?',
                def: 'true',
                toggle: {
                    true: 'Append to figure class',
                    false: 'Override default classes'
                }
            },
            figureStyle: {
                type: 'string',
                label: 'Figure style'
            },
        }
    }
};
