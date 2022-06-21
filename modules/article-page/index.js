module.exports = {
    extend: '@apostrophecms/piece-page-type',
    options: {
        label: 'Article Page',
        pluralLabel: 'Article Pages',
        pieceModuleName: 'article',
        previous: true,
        next: true
    },
    fields: {
        add: {},
        group: {}
    }
};
