module.exports = {
    extend: '@apostrophecms/widget-type',
    options: {
        label: 'Card',
        icon: 'cardIcon',
        openGraph: false,
    },
    icons: {
        cardIcon: 'CardAccountDetailsOutline'
    },
    fields: {
        add: {
            cardType: {
                type: 'select',
                label: 'Choose the card type',
                help: 'Choose what type of card you want to create',
                def: '',
                choices: [
                    {
                        label: 'Simple card (body only)',
                        value: 'simple'
                    },
                    {
                        label: 'Simple card with image (mixed-content card, image, heading and text)',
                        value: 'mixed'
                    },
                    {
                        label: 'Flexible card with image (mixed-content card: image and flexible body)',
                        value: 'rich',
                    },
                    {
                        label: 'Horizontal flexible card with image (mixed-content card: image and flexible body)',
                        value: 'horizontal',
                    },
                ]
            },
            imageCapPlacement: {
                type: 'select',
                label: 'Choose where to append the image cap to the card',
                def: 'top',
                choices: [
                    {
                        label: 'Append image to the top of a vertical card',
                        value: 'top'
                    },
                    {
                        label: 'Append image to the bottom of a vertical card',
                        value: 'bottom',
                    }
                ],
                if: {
                    $or: [
                        { cardType: 'mixed'},
                        { cardType: 'rich'},
                    ]
                },
            },
            topImage: {
                type: 'area',
                label: 'Image',
                help: 'Top image in case of a regular vertical card, otherwise displayed on the left of a horizontal card',
                options: {
                    widgets: {
                        'image': {
                            size: 'one-sixth',
                            dimensionAttrs: true,
                            className: 'card-img-top'
                        },
                    }
                },
                if: {
                    imageCapPlacement: 'top',
                    useCardHeader: false,
                    $or: [
                        { cardType: 'mixed'},
                        { cardType: 'rich'},
                        { cardType: 'horizontal'},
                    ],
                }
            },
            bottomImage: {
                type: 'area',
                label: 'Image',
                help: 'Bottom image in case of a regular vertical card',
                options: {
                    widgets: {
                        'image': {
                            size: 'one-sixth',
                            dimensionAttrs: true,
                            className: 'card-img-bottom'
                        },
                    }
                },
                if: {
                    imageCapPlacement: 'bottom',
                    useCardFooter: false,
                    $or: [
                        { cardType: 'mixed'},
                        { cardType: 'rich'},
                    ],
                }
            },
            cardTitle: {
                type: 'string',
                label: 'Card title',
                if: {
                    $or: [
                        { cardType: 'simple' },
                        { cardType: 'mixed' },
                    ]
                },
            },
            cardSubtitle: {
                type: 'string',
                label: 'Card subtitle',
                if: {
                    $or: [
                        { cardType: 'simple' },
                        { cardType: 'mixed' },
                    ]
                },
            },
            cardText: {
                type: 'string',
                label: 'Card text',
                textarea: true,
                if: {
                    $or: [
                        { cardType: 'simple' },
                        { cardType: 'mixed' },
                    ]
                },
            },
            textClass: {
                type: 'string',
                label: 'Text class',
                if: {
                    $or: [
                        { cardType: 'simple' },
                        { cardType: 'mixed' },
                    ]
                },
            },
            useCardHeader: {
                type: 'boolean',
                label: 'Create a card header',
                help: 'You can create an optional header within a card',
                def: false,
            },
            cardHeader: {
                type: 'area',
                label: 'Card heaader',
                options: {
                    widgets: {
                        '@apostrophecms/rich-text': {},
                        '@apostrophecms/html': {},
                    }
                },
                if: {
                    useCardHeader: true
                }
            },
            useCardFooter: {
                type: 'boolean',
                label: 'Create a card footer',
                help: 'You can create an optional footer within a card',
                def: false,
            },
            cardFooter: {
                type: 'area',
                label: 'Card footer',
                options: {
                    widgets: {
                        '@apostrophecms/rich-text': {},
                        '@apostrophecms/html': {},
                    }
                },
                if: {
                    useCardFooter: true
                }
            },
            body: {
                type: 'area',
                label: 'Card body',
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
                        'testimonial': {},
                        'list': {},
                        'list-group': {},
                        'definition-list': {},
                        'link': {},
                        'button': {},
                        'brand': {},
                        'newsletter-subscription': {},
                        'table': {},
                    }
                },
                if: {
                    cardType: 'rich'
                },
            },
            cardLinks: {
                type: 'array',
                label: 'Card links',
                titleField: 'linkTitle',
                fields: {
                    add: {
                        linkTitle: {
                            type: 'string',
                            label: 'Link title'
                        },
                        link: {
                            type: 'area',
                            label: 'link',
                            options: {
                                widgets: {
                                    'card-link': {}
                                }
                            }
                        }
                    }
                }
            },
            cardWidth: {
                type: 'select',
                label: 'Choose the card width',
                help: 'By default, this card will take the full width (100%) of it\'s parent element. Choose a different width, or leave it on auto to automatically determine it\'s width with other cards, for example',
                def: 'auto',
                choices: [
                    {
                        label: '25% width',
                        value: '25',
                    },
                    {
                        label: '50% width',
                        value: '50',
                    },
                    {
                        label: '75% width',
                        value: '75',
                    },
                    {
                        label: '100% width',
                        value: '100',
                    },
                    {
                        label: 'Automatic width',
                        value: 'auto',
                    },
                ]
            },
            cardHeight: {
                type: 'select',
                label: 'Choose the card height',
                help: 'By default, this card will have a height automatically determined by its content. If you want to make this card full height (100%), e.g. to have multiple side-by-side cards equal height, then choose full height here.',
                def: 'auto',
                choices: [
                    {
                        label: '100% height',
                        value: '100',
                    },
                    {
                        label: 'Automatic height',
                        value: 'auto',
                    },
                ]
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
                    cardType: 'horizontal',
                }
            },
            horizontalAlignment: {
                type: 'select',
                label: 'Horizontal alignment',
                help: 'Choose how contents should be horizontally aligned within the card',
                def: 'left',
                choices: [
                    {
                        label: 'Left-align',
                        value: 'left'
                    },
                    {
                        label: 'Centre content',
                        value: 'centre'
                    },
                    {
                        label: 'Right-align',
                        value: 'right'
                    }
                ],
            },
            wrapInColumn: {
                type: 'boolean',
                label: 'Wrap card in column',
                help: 'Should this card be laid out within a column wrapper?',
            },
            columnClass: {
                type: 'string',
                label: 'Class of wrapping column element',
                help: 'Override the class of the containing column element',
                if: {
                    wrapInColumn: true,
                }
            },
            backgroundColour: {
                type: 'color',
                label: 'Card background colour',
                options: {
                    pickerOptions: {
                        presetColors: [ '#cc302bff', '#000055ff', '#4E4E8Eff', '#9D9DC6ff', '#EBEBFF', '#504b90ff', '#8681c8ff', '#AAA6D8ff', '#CDCCE9ff', '#F1F1F9ff', '#f8cf3eff', '#FADD78ff', '#FCECB1ff', '#FEFAEBff', '#dc3545ff', '#E7737Eff', '#F1B0B6ff', '#FCEEEFff', '#68C3D4ff', '#95D5E1ff', '#C2E7EEff', '#EFF9FBff', '#1A936Fff', '#24B26Fff', '#ffffffff' ]
                    }
                }
            },
            textColour: {
                type: 'color',
                label: 'Foreground text colour',
                options: {
                    pickerOptions: {
                        presetColors: [ '#cc302bff', '#000055ff', '#4E4E8Eff', '#9D9DC6ff', '#EBEBFF', '#504b90ff', '#8681c8ff', '#AAA6D8ff', '#CDCCE9ff', '#F1F1F9ff', '#f8cf3eff', '#FADD78ff', '#FCECB1ff', '#FEFAEBff', '#dc3545ff', '#E7737Eff', '#F1B0B6ff', '#FCEEEFff', '#68C3D4ff', '#95D5E1ff', '#C2E7EEff', '#EFF9FBff', '#1A936Fff', '#24B26Fff', '#ffffffff' ]
                    }
                },
            },
            headerBackgroundColour: {
                type: 'color',
                label: 'Card header and footer background colour',
                options: {
                    pickerOptions: {
                        presetColors: [ '#cc302bff', '#000055ff', '#4E4E8Eff', '#9D9DC6ff', '#EBEBFF', '#504b90ff', '#8681c8ff', '#AAA6D8ff', '#CDCCE9ff', '#F1F1F9ff', '#f8cf3eff', '#FADD78ff', '#FCECB1ff', '#FEFAEBff', '#dc3545ff', '#E7737Eff', '#F1B0B6ff', '#FCEEEFff', '#68C3D4ff', '#95D5E1ff', '#C2E7EEff', '#EFF9FBff', '#1A936Fff', '#24B26Fff', '#ffffffff' ]
                    }
                }
            },
            headerTextColour: {
                type: 'color',
                label: 'Header and footer text colour',
                options: {
                    pickerOptions: {
                        presetColors: [ '#cc302bff', '#000055ff', '#4E4E8Eff', '#9D9DC6ff', '#EBEBFF', '#504b90ff', '#8681c8ff', '#AAA6D8ff', '#CDCCE9ff', '#F1F1F9ff', '#f8cf3eff', '#FADD78ff', '#FCECB1ff', '#FEFAEBff', '#dc3545ff', '#E7737Eff', '#F1B0B6ff', '#FCEEEFff', '#68C3D4ff', '#95D5E1ff', '#C2E7EEff', '#EFF9FBff', '#1A936Fff', '#24B26Fff', '#ffffffff' ]
                    }
                },
            },
            cardBorderColour: {
                type: 'color',
                label: 'Card border colour',
                options: {
                    pickerOptions: {
                        presetColors: [ '#cc302bff', '#000055ff', '#4E4E8Eff', '#9D9DC6ff', '#EBEBFF', '#504b90ff', '#8681c8ff', '#AAA6D8ff', '#CDCCE9ff', '#F1F1F9ff', '#f8cf3eff', '#FADD78ff', '#FCECB1ff', '#FEFAEBff', '#dc3545ff', '#E7737Eff', '#F1B0B6ff', '#FCEEEFff', '#68C3D4ff', '#95D5E1ff', '#C2E7EEff', '#EFF9FBff', '#1A936Fff', '#24B26Fff', '#ffffffff' ]
                    }
                }
            },
            imageContainerClass: {
                type: 'string',
                label: 'Image container class'
            },
            cardClass: {
                type: 'string',
                label: 'Card class'
            },
            cardStyle: {
                type: 'string',
                label: 'Card CSS styling',
                textarea: true,
            },
            backgroundStyle: {
                type: 'string',
                label: 'Background CSS styling',
                textarea: true,
            },
            headerClass: {
                type: 'string',
                label: 'Header class'
            },
            headerStyle: {
                type: 'string',
                label: 'Header and footer CSS styling',
                textarea: true,
            },
        }
    }
};
