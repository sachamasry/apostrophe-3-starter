module.exports = {
    extend: '@apostrophecms/widget-type',
    options: {
        label: 'Cover Block',
        icon: 'coverBlockIcon',
        openGraph: false,
    },
    icons: {
        coverBlockIcon: 'ImageText'
    },
    fields: {
        add: {
            foregroundBlock: {
                type: 'area',
                label: 'Foreground block',
                help: 'Create content to display in the foreground, above the cover',
                options: {
                    widgets: {
                        '@apostrophecms/rich-text': {},
                        'image': {},
                        'figure': {},
                        '@apostrophecms/video': {},
                        '@apostrophecms/html': {},
                        'columns': {},
                        'container-block': {},
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
                    },
                }
            },
            backgroundMedia: {
                type: 'area',
                label: 'Choose media to display in block',
                options: {
                    max: 1,
                    widgets: {
                        'image': {},
                        '@apostrophecms/video': {},
                        '@apostrophecms/html': {},
                    }
                }
            },
            blockAlignment: {
                type: 'select',
                label: 'Choose block alignment',
                help: 'How should this cover block be aligned on the page (if it isn\'t full width)?',
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
                ]
            },
            blockWidth: {
                type: 'select',
                label: 'Change width',
                help: 'Choose width of the cover block, relative to its parent element',
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
            foregroundPosition: {
                type: 'select',
                label: 'Choose the foreground block position',
                help: 'Choose how you\'d like to position the foreground block. Positions are relative to the cover block itself',
                def: 'centre',
                choices: [
                    {
                        label: 'Top left',
                        value: 'tl'
                    },
                    {
                        label: 'Top centre',
                        value: 'tc'
                    },
                    {
                        label: 'Top right',
                        value: 'tr'
                    },
                    {
                        label: 'Centre left',
                        value: 'cl'
                    },
                    {
                        label: 'Centre',
                        value: 'centre'
                    },
                    {
                        label: 'Centre right',
                        value: 'cr'
                    },
                    {
                        label: 'Bottom left',
                        value: 'bl'
                    },
                    {
                        label: 'Bottom centre',
                        value: 'bc'
                    },
                    {
                        label: 'Bottom right',
                        value: 'br'
                    },
                ]
            },
            fullHeightBlock: {
                type: 'boolean',
                label: 'Make the block full height',
                help: 'Make the block take the full height of the screen?',
                def: false
            },
            fullBleedBlock: {
                type: 'boolean',
                label: 'Make this block full-bleed',
                help: 'This block must cover its parent element edge-to-edge, with no spacing anywhere',
                def: false,
            },
            minimumHeightOfBlock: {
                type: 'range',
                label: 'Minimum height of cover block',
                def: 20,
                min: 10,
                max: 60,
                step: 1,
                if: {
                    fullHeightBlock: false
                }
            },
            blockColour: {
                type: 'color',
                label: 'Cover block background colour',
                options: {
                    pickerOptions: {
                        presetColors: [ '#cc302bff', '#000055ff', '#4E4E8Eff', '#9D9DC6ff', '#EBEBFF', '#504b90ff', '#8681c8ff', '#AAA6D8ff', '#CDCCE9ff', '#F1F1F9ff', '#f8cf3eff', '#FADD78ff', '#FCECB1ff', '#FEFAEBff', '#dc3545ff', '#E7737Eff', '#F1B0B6ff', '#FCEEEFff', '#68C3D4ff', '#95D5E1ff', '#C2E7EEff', '#EFF9FBff', '#1A936Fff', '#24B26Fff', '#ffffffff' ]
                    }
                }
            },
            foregroundTextColour: {
                type: 'color',
                label: 'Foreground text colour',
                options: {
                    pickerOptions: {
                        presetColors: [ '#cc302bff', '#000055ff', '#4E4E8Eff', '#9D9DC6ff', '#EBEBFF', '#504b90ff', '#8681c8ff', '#AAA6D8ff', '#CDCCE9ff', '#F1F1F9ff', '#f8cf3eff', '#FADD78ff', '#FCECB1ff', '#FEFAEBff', '#dc3545ff', '#E7737Eff', '#F1B0B6ff', '#FCEEEFff', '#68C3D4ff', '#95D5E1ff', '#C2E7EEff', '#EFF9FBff', '#1A936Fff', '#24B26Fff', '#ffffffff' ]
                    }
                }
            },
            foregroundBlockBackgroundColour: {
                type: 'color',
                label: 'Foreground block\'s background colour',
                options: {
                    pickerOptions: {
                        presetColors: [ '#cc302bff', '#000055ff', '#4E4E8Eff', '#9D9DC6ff', '#EBEBFF', '#504b90ff', '#8681c8ff', '#AAA6D8ff', '#CDCCE9ff', '#F1F1F9ff', '#f8cf3eff', '#FADD78ff', '#FCECB1ff', '#FEFAEBff', '#dc3545ff', '#E7737Eff', '#F1B0B6ff', '#FCEEEFff', '#68C3D4ff', '#95D5E1ff', '#C2E7EEff', '#EFF9FBff', '#1A936Fff', '#24B26Fff', '#ffffffff' ]
                    }
                }
            },
            foregroundBlockBorderColour: {
                type: 'color',
                label: 'Foreground border colour',
                options: {
                    pickerOptions: {
                        presetColors: [ '#cc302bff', '#000055ff', '#4E4E8Eff', '#9D9DC6ff', '#EBEBFF', '#504b90ff', '#8681c8ff', '#AAA6D8ff', '#CDCCE9ff', '#F1F1F9ff', '#f8cf3eff', '#FADD78ff', '#FCECB1ff', '#FEFAEBff', '#dc3545ff', '#E7737Eff', '#F1B0B6ff', '#FCEEEFff', '#68C3D4ff', '#95D5E1ff', '#C2E7EEff', '#EFF9FBff', '#1A936Fff', '#24B26Fff', '#ffffffff' ]
                    }
                }
            },
            blockClass: {
                type: 'string',
                label: 'Additional background cover block CSS classes'
            },
            blockStyle: {
                type: 'string',
                label: 'Background cover block CSS styling',
                help: 'Insert any manual styling here, e.g. a CSS gradient',
                textarea: true
            },
            foregroundBlockClass: {
                type: 'string',
                label: 'Additional foreground block CSS classes'
            },
            foregroundBlockStyle: {
                type: 'string',
                label: 'Foreground block CSS styling',
                textarea: true
            }
        }
    }
};
