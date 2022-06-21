module.exports = {
    extend: '@apostrophecms/widget-type',
    options: {
        label: 'Horizontal Rule',
        icon: 'ruleIcon',
        ignoreNoCodeWarning: true,
        openGraph: false,
    },
    icons: {
        ruleIcon: 'RulerSquare'
    },
    fields: {
        add: {
            ruleColour: {
                type: 'color',
                label: 'Horizontal rule colour',
                help: 'Choose a colour for the rule; the default is grey',
                options: {
                    pickerOptions: {
                        presetColors: [ '#cc302bff', '#000055ff', '#4E4E8Eff', '#9D9DC6ff', '#EBEBFF', '#504b90ff', '#8681c8ff', '#AAA6D8ff', '#CDCCE9ff', '#F1F1F9ff', '#f8cf3eff', '#FADD78ff', '#FCECB1ff', '#FEFAEBff', '#dc3545ff', '#E7737Eff', '#F1B0B6ff', '#FCEEEFff', '#68C3D4ff', '#95D5E1ff', '#C2E7EEff', '#EFF9FBff', '#1A936Fff', '#24B26Fff', '#ffffffff' ]
                    }
                }
            },
        }
    }
};
