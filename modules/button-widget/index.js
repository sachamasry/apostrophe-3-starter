module.exports = {
    extend: 'link-widget',
    options: {
        label: 'Button',
        icon: 'ctaButton',
        openGraph: false,
    },
    icons: {
        ctaButton: 'GestureTapButton'
    },
    fields: {
        add: {
            buttonType: {
                type: 'select',
                label: 'Button type',
                help: 'CTA buttons are site-specific Call-To-Action buttons, while the flexible button lets you build custom buttons',
                def: 'cta',
                choices: [
                    {
                        label: 'CTA Button (Call-To-Action)',
                        value: 'cta'
                    },
                    {
                        label: 'Customisable button',
                        value: 'custom'
                    }
                ]
            },
            label: {
                label: 'Button text',
                type: 'string'
            },
            buttonClass: {
                type: 'string',
                label: 'Button class',
                if: {
                    buttonType: 'custom'
                }
            },
            buttonFillStyle: {
                type: 'select',
                label: 'Button fill style',
                choices: [
                    {
                        label: 'Filled button',
                        value: 'filled'
                    },
                    {
                        label: 'Outlined button',
                        value: 'outlined'
                    }
                ],
                if: {
                    buttonType: 'custom'
                }
            },
            buttonFillColour: {
                type: 'color',
                label: 'Button fill colour (background)',
                if: {
                    buttonFillStyle: 'filled',
                    buttonType: 'custom'
                },
                options: {
                    pickerOptions: {
                        presetColors: [ '#cc302bff', '#000055ff', '#4E4E8Eff', '#9D9DC6ff', '#EBEBFF', '#504b90ff', '#8681c8ff', '#AAA6D8ff', '#CDCCE9ff', '#F1F1F9ff', '#f8cf3eff', '#FADD78ff', '#FCECB1ff', '#FEFAEBff', '#dc3545ff', '#E7737Eff', '#F1B0B6ff', '#FCEEEFff', '#68C3D4ff', '#95D5E1ff', '#C2E7EEff', '#EFF9FBff', '#1A936Fff', '#24B26Fff', '#ffffffff' ]
                    }
                }
            },
            buttonBorderColour: {
                type: 'color',
                label: 'Button border colour',
                if: {
                    buttonType: 'custom'
                },
                options: {
                    pickerOptions: {
                        presetColors: [ '#cc302bff', '#000055ff', '#4E4E8Eff', '#9D9DC6ff', '#EBEBFF', '#504b90ff', '#8681c8ff', '#AAA6D8ff', '#CDCCE9ff', '#F1F1F9ff', '#f8cf3eff', '#FADD78ff', '#FCECB1ff', '#FEFAEBff', '#dc3545ff', '#E7737Eff', '#F1B0B6ff', '#FCEEEFff', '#68C3D4ff', '#95D5E1ff', '#C2E7EEff', '#EFF9FBff', '#1A936Fff', '#24B26Fff', '#ffffffff' ]
                    }
                }
            },
            buttonTextColour: {
                type: 'color',
                label: 'Button text colour (foreground)',
                if: {
                    buttonType: 'custom'
                },
                options: {
                    pickerOptions: {
                        presetColors: [ '#cc302bff', '#000055ff', '#4E4E8Eff', '#9D9DC6ff', '#EBEBFF', '#504b90ff', '#8681c8ff', '#AAA6D8ff', '#CDCCE9ff', '#F1F1F9ff', '#f8cf3eff', '#FADD78ff', '#FCECB1ff', '#FEFAEBff', '#dc3545ff', '#E7737Eff', '#F1B0B6ff', '#FCEEEFff', '#68C3D4ff', '#95D5E1ff', '#C2E7EEff', '#EFF9FBff', '#1A936Fff', '#24B26Fff', '#ffffffff' ]
                    }
                }
            }
        },
        remove: [ 'alignLink', 'linkClass', 'linkStyle' ]
    }
};
