module.exports = {
    extend: '@apostrophecms/widget-type',
    options: {
        label: 'Verse',
        icon: 'verseIcon',
        openGraph: false,
    },
    icons: {
        verseIcon: 'TextShort'
    },
    fields: {
        add: {
            verse: {
                type: 'string',
                label: 'Verse',
                required: true,
                textarea: true
            }
        }
    }
};
