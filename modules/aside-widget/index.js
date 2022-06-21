module.exports = {
    extend: '@apostrophecms/widget-type',
    options: {
        label: 'Aside',
        icon: 'sidebarIcon'
    },
    icons: {
        sidebarIcon: 'PageLayoutSidebarRight'
    },
    fields: {
        add: {
            _linkedContent: {
                type: 'relationship',
                label: 'Select reusable content block to display here',
                withType: 'reusable-content',
                max: 1
            }
        }
    }
};
