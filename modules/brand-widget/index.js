module.exports = {
    extend: '@apostrophecms/widget-type',
    options: {
        label: 'Site Brand',
        icon: 'brandIcon',
        openGraph: false,
    },
    icons: {
        brandIcon: 'BullseyeArrow'
    },
    fields: {
        add: {
            brandType: {
                type: 'select',
                label: 'Choose brand type to insert',
                help: 'Choose from site logo or masthead brand to insert',
                def: 'logo',
                choices: [
                    {
                        label: 'Logo',
                        value: 'logo'
                    },
                    {
                        label: 'Masthead brand',
                        value: 'masthead'
                    }
                ]
            },
            loadingAttribute: {
                type: 'select',
                label: 'Image loading',
                help: 'How should the browser load the brand image?',
                def: 'auto',
                choices: [
                    {
                        label: 'Automatic (let the browser decide)',
                        value: 'auto'
                    },
                    {
                        label: 'Eager (load immediately)',
                        value: 'eager'
                    },
                    {
                        label: 'Lazy (load only when needed)',
                        value: 'lazy'
                    }
                ]
            },
            sectionContainer: {
                type: 'boolean',
                label: 'Is this section a container?',
                help: 'Should this section element be a CSS container, containing the width of its content, padding and aligning it in the viewport?',
                def: false
            },
        }
    }
};
